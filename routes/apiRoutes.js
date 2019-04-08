var db = require("../models/");

module.exports = function(app) {
  // Get all fitness
  app.get("/api/fitness", function(req, res) {
    db.Profile.findAll({}).then(function(dbProfile) {
      res.json(dbProfile);
    });
  });

  // Create a new example
  app.post("/api/fitness", function(req, res) {
    db.Profile.create(req.body).then(function(dbProfile) {
      res.json(dbProfile);
    });
  });

  // Delete user by id

  app.delete("/api/examples/:id", function(req, res) {
    db.Profile.destroy({ where: { id: req.params.id } }).then(function(
      dbProfile
    ){
      res.json(dbProfile);
    });
  });
};
