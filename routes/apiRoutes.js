var db = require("../models");

module.exports = function(app) {
  // Get all fitness
  app.get("/api/fitness", function(req, res) {
    db.fithub.findAll({}).then(function(dbfithub) {
      res.json(dbfithub);
    });
  });

  // Create a new example
  app.post("/api/fitness", function(req, res) {
    db.fithub.create(req.body).then(function(dbfithub) {
      res.json(dbfithub);
    });
  });

  // Delete user by id

  app.delete("/api/examples/:id", function(req, res) {
    db.fithub.destroy({ where: { id: req.params.id } }).then(function(
      dbfithub
    ){
      res.json(dbfithub);
    });
  });
};
