module.exports = mongoose => {
    const Rental = mongoose.model(
      "rental",
      mongoose.Schema(
        {
          title: String,
          address: String,
          city: String,
          state: String,
          postal_code: String,
          price: Number,
          size: Number,
          bedrooms: Number,
          bathrooms: Number,
          petsAllowed: Boolean,
          smokingAllowed: Boolean,
          furnished: Boolean,
          laundry: Boolean,
          image: String,
          url: String
        }
        // ,{ timestamps: true }
      )
    );
  
    return Rental;
  };