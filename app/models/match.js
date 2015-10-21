var mongoose = require('mongoose');

module.exports = mongoose.model('Match', {

  number: Number,
  quadrant: Number,
  stacks: String

});
