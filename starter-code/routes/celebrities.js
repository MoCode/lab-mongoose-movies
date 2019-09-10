const express = require("express");
const router = express.Router();

const Celebrity = require("../models/celebrity");

router.get("/", (req, res, next) => {

  Celebrity.find().then(celebrities => {
    res.render("celebrities/index.hbs", {
      celebritiesList: celebrities
    }).catch(err => {
      console.log("error")
    })
  })
})



router.get("/new", (req, res, next) => {
  res.render("celebrities/new.hbs")
})

router.post("/", (req, res, next) => {
  const {
    name,
    occupation,
    catchPhrase
  } = req.body

  Celebrity.create({
      name,
      occupation,
      catchPhrase
    })
    .then(celebrity => {
      console.log("Success celebrity")
      Celebrity.find().then(data => {
        res.redirect("celebrities/index")
      });
    }).catch(err => {
      console.log(err)
      next()
    })


  console.log(req.body)



})




router.get("/:celebrityId", (req, res) => {
  const celebrityId = req.params.celebrityId
  console.log(celebrityId);
  Celebrity.findById(celebrityId).then(celebrity => {
    res.render("celebrities/celebrityDetails.hbs", {
      celebrityDetails: celebrity
    })
  })
})





module.exports = router