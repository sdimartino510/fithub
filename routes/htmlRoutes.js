var db = require("../models");
var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.redirect("/home");
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/home.html"));
  });

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/add.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/profile.html"));
  });
  app.get("/all-profiles", function(req, res){
    db.Profile.findAll().then(function(dbProfile){
      console.log(dbProfile);
      var profileObject = {
        allProfiles: dbProfile
      }
      return res.render("example", profileObject)
    })
  })
  app.post("/profiles/create", function(req, res) {
    db.Profile.create({
      name: req.body.name,
      age: req.body.age,
      weight: req.body.weight,
      height: req.body.height
    }).then(function(dbProfile) {
      console.log(dbProfile);
      res.redirect("/example");
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
