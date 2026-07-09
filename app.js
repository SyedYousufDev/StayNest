const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../StayNest/models/listing.js");  

const Mongo_URL = "mongodb://127.0.0.1:27017/StayNest";

// 1. This now matches the function name below
main()
    .then(() => {
        console.log("Connected to MongoDB successfully!");
    })
    .catch(err => {
        console.log("Database connection error:", err);
    });

// 2. Renamed from 'name' to 'main' and removed quotes from Mongo_URL
async function main() {
    await mongoose.connect(Mongo_URL); 
}

app.get("/", (req, res) => {
    res.send("Root path is working.");
});

app.listen(8080, () => {
    console.log("Server is started on port 8080");
});

//testing
app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title: "My New Distination",
    description: "By the Mountains",
    price: 1200,
    location: "Mingora, Swat",
    country: "Pakistan",
  });

  await sampleListing.save();
  console.log("sample was saved");
  res.send("successful testing");
});