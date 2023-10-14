const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    //Setting default value
    set: (v) => v==="" ? "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F496310821404619189%2F&psig=AOvVaw1R81RHnc9qbUtA-6Nc1NGq&ust=1697362519279000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPjN-6Ge9YEDFQAAAAAdAAAAABAK" : v;
  },
  price: Number,
  location: String,
  country: String,
});
