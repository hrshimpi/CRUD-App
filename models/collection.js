const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email:{
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  }
});

module.exports = mongoose.model("test", testSchema);