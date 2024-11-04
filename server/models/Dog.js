// library that is necessary for the connection
const mongoose = require('mongoose');

// object for Dog
let DogModel = {};

/* Every Dog should have a
 name (string)
 breed (string)
 age (number)
 createdDate (Date);
*/
//
const DogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  breed: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  age: {
    type: Number,
    min: 0,
    required: true,
  },

  createdDate: {
    type: Date,
    default: Date.now,
  },

});

// makes the DogModel work
DogModel = mongoose.model('Dog', DogSchema);

// exports the DogModel so we can overwrite the entire exports object.
module.exports = DogModel;
