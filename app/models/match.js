var mongoose = require('mongoose');

module.exports = mongoose.model('Match', {

  team: Number,
  number: Number,
  quadrant: String,
  scouter: String,

  botType: String,

  totalscore: Number,

  defenseOne: String,
  defenseTwo: String,
  defenseThree: String,
  defenseFour: String,
  defenseFive: String,

  auto: String,
  autonotes: String,

  teleop: String,
  teleopnotes: String

});
