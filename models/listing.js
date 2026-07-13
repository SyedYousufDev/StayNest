
const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

// Inside ../models/listing.js
const listingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  // UPDATE THIS PART:
  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b...", // fallback image
    },
  },
  price: Number,
  location: String,
  country: String,
});

// Ensure it looks like this at the bottom of models/listing.js
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;