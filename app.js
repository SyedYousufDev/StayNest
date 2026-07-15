const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("../StayNest/models/listing.js");
const path = require("path");

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended: true}));

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
// app.get("/testListing", async (req, res) => {
//   let sampleListing = new Listing({
//     title: "My New Distination",
//     description: "By the Mountains",
//     price: 1200,
//     location: "Mingora, Swat",
//     country: "Pakistan",
//   });

//   await sampleListing.save();
//   console.log("sample was saved");
//   res.send("successful testing");
// });


app.get("/", (req, res) => {
  res.send("Hi, I am root");
});


//Index Router
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", {allListings});
});

//show route
app.get("/listings/:id",async (req,res)=>{
    let {id}= req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
}) 