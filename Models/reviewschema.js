const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  review_text: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  book: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);