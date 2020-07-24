//This will be the template used to describe what each individual document will look like in our collection.
//Think of this as a factory, or mold, that can create new User documents in a User collection.

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports= mongoose.model('User',UserSchema);