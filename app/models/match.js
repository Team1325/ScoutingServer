var mongoose = require('mongoose');

module.exports = mongoose.model('Match', {

  number: Number,
  quadrant: String,
  teleop: String,
  auto: String,
  scouter: String,
  team: Number

});
