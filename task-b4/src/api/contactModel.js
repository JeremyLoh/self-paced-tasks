const Mongoose = require("mongoose");

const schema = new Mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  gender: String,
  phone: String,
  create_date: {
    type: Date,
    default: Date.now,
  },
});

// Export Contact model
module.exports = Mongoose.model("contacts", schema);
