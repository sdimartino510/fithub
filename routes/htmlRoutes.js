var db = require("../models");

module.exports = function(app) {
  
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/add", function(req, res) {
    res.render("add");
  });

  app.get("/profile", function(req, res) {
    res.render("profile");
  });

  app.get("/survey", function(res, res) {
    res.render("survey");
  });

  app.get("/all-profiles", function(req, res){
    db.Profile.findAll().then(function(dbProfile){
      console.log("All profiles: " + dbProfile);
      var profileObject = {
        allProfiles: dbProfile
      }
      return res.render("add", profileObject)
    })
  })

  app.post("/profiles/create", function(req, res) {
    db.Profile.create({
      name: req.body.name,
      age: req.body.age,
      weight: req.body.weight,
      height: req.body.height,
      water_glasses: req.body.water_glasses,
      exercise_days: req.body.exercise_days,
      veggies: req.body.veggies,
      fruits: req.body.fruits,
      sleep_hours: req.body.sleep_hours,
      gender: req.body.gender
    }).then(function(dbProfile) {
      console.log(dbProfile);
      res.redirect("/add");
    });
  });

  // Load example page and pass in an example by id
  app.get("/profile/:id", function(req, res) {
    db.Profile.findOne({ where: { id: req.params.id } }).then(function(
      dbProfile
    ) {
      res.render("Profile", {
        Profile: dbProfile
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
