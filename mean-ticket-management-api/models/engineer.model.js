const mongoose = require("mongoose");

const EngineerSchema = new mongoose.Schema({
  name: String,
  team: { type: mongoose.Schema.Types.Mixed, ref: "Team" },
  status: String,
});

const Engineer = mongoose.model("Engineer", EngineerSchema);
module.exports = Engineer;
