const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      bcrypt = require('bcryptjs')

var User = new Schema({
  id: {
    type: String,
  },
  email: {
    type: String,
    // required: true,
    // unique: true,
    trim: true
  },
  firstName: {
    type: String,
    // unique: true,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    // unique: true,
    // required: true,
    trim: true
  },
  telephone:{
    type:String,
    trim:true
  },
  company:{
     type:String,
     // required: true,
     trim: true
  },

  officalVisit:{
    type:Boolean,
    // required: true

  },

escortRequired:{
  type:Boolean
},

escortName:{
  type:String
},



  // password: {
  //   type: String,
  //   // required: true
  // },
  // displayName: {
  //   type: String,
  //   // required: true
  // },
  // createdOn: {
  //   type: Date,
  //   // required: true
  // }
})

module.exports = mongoose.model('User', User)
