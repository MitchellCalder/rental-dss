const db = require("../models");
const Rental = db.rentals;

// Create and Save a new Rental
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }
  
    // Create a Rental
    const rental = new Rental({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      size: req.body.size,
      rooms: req.body.rooms,
      bathrooms: req.body.bathrooms,
      petsAllowed: req.body.petsAllowed ? req.body.petsAllowed : false,
      smokingAllowed: req.body.smokingAllowed ? req.body.smokingAllowed : false,
      furnished: req.body.furnished ? req.body.furnished : false,
      laundry: req.body.laundry ? req.body.laundry : false,
      published: req.body.published ? req.body.published : false
    });
  
    // Save Rental in the database
    rental
      .save(rental)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Rental."
        });
      });
  };

// Retrieve all Rentals from the database.
exports.findAll = (req, res) => {
    let minPrice = req.query.minPrice;
    let maxPrice = req.query.maxPrice;
    let minSize = req.query.minSize;
    let maxSize = req.query.maxSize;
    let minRooms = req.query.minRooms;
    let maxRooms = req.query.maxRooms;
    let minBathrooms = req.query.minBathrooms;
    let maxBathrooms = req.query.maxBathrooms;
    let petsAllowed = req.query.petsAllowed;
    let smokingAllowed = req.query.smokingAllowed;
    let furnished = req.query.furnished;
    let laundry = req.query.laundry;
    
    let query = req.query;
    console.log(query);

    var condition = { $and: [ 
      { price: { $gte:minPrice } },
      { price: { $lte:maxPrice } },
      { size: { $gte:minSize } },
      { size: { $lte:maxSize } },
      { rooms: { $gte:minRooms } },
      { rooms: { $lte:maxRooms } },
      { bathrooms: { $gte:minBathrooms } },
      { bathrooms: { $lte:maxBathrooms } }
    ] };

    if (petsAllowed === 'true') condition.$and.push({petsAllowed: true});
    if (smokingAllowed === 'true') condition.$and.push({smokingAllowed: true});
    if (furnished === 'true') condition.$and.push({furnished: true});
    if (laundry === 'true') condition.$and.push({laundry: true});

    console.log(condition);
    console.log(condition.$and);
    Rental.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving rentals."
        });
      });
  };

// Find a single Rental with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Rental.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Rental with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Rental with id=" + id });
      });
  };

// Update a Rental by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
      return res.status(400).send({
        message: "Data to update can not be empty!"
      });
    }
  
    const id = req.params.id;
  
    Rental.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot update Rental with id=${id}. Maybe Rental was not found!`
          });
        } else res.send({ message: "Rental was updated successfully." });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Rental with id=" + id
        });
      });
  };

// Delete a Rental with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Rental.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Rental with id=${id}. Maybe Rental was not found!`
          });
        } else {
          res.send({
            message: "Rental was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Rental with id=" + id
        });
      });
  };

// Delete all Rentals from the database.
exports.deleteAll = (req, res) => {
    Rental.deleteMany({})
      .then(data => {
        res.send({
          message: `${data.deletedCount} Rentals were deleted successfully!`
        });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all rentals."
        });
      });
  };

// Find all published Rentals
exports.findAllPublished = (req, res) => {
    Rental.find({ published: true })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving rentals."
        });
      });
  };