module.exports = mongoose => {
    const Rental = mongoose.model(
      "rental",
      mongoose.Schema(
        {
          title: String,
          description: String,
          published: Boolean
        },
        { timestamps: true }
      )
    );
  
    return Rental;
  };