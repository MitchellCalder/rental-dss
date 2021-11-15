module.exports = app => {
    const rentals = require("../controllers/rental.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Rental
    router.post("/", rentals.create);
  
    // Retrieve all Rentals
    router.get("/", rentals.findAll);
  
    // Retrieve all published Rentals
    router.get("/published", rentals.findAllPublished);
  
    // Retrieve a single Rental with id
    router.get("/:id", rentals.findOne);
  
    // Update a Rental with id
    router.put("/:id", rentals.update);
  
    // Delete a Rental with id
    router.delete("/:id", rentals.delete);
  
    // Create a new Rental
    router.delete("/", rentals.deleteAll);
  
    app.use('/api/rentals', router);
  };