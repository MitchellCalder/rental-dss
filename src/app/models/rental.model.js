module.exports = mongoose => {
    const Rental = mongoose.model(
      "rental",
      mongoose.Schema(
        {
          title: String,
          description: String,
          price: Number,
          size: Number,
          rooms: Number,
          bathrooms: Number,
          petsAllowed: Boolean,
          smokingAllowed: Boolean,
          furnished: Boolean,
          laundry: Boolean,
        },
        { timestamps: true }
      )
    );
  
    return Rental;
  };