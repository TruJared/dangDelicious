const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const slug = require('slugs');

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: 'Please enter a store name',
  },
  slug: String,
  description: {
    type: String,
    trim: true,
  },
  tags: [String],
});

// ! presave hook to generate a slug
storeSchema.pre('save', function(next) {
  // * if name not changed no need to save * //
  if (!this.isModified('name')) {
    return next();
  }
  this.slug = slug(this.name);
  next();
  // TODO make slugs unique //
});

module.exports = mongoose.model('Store', storeSchema);
