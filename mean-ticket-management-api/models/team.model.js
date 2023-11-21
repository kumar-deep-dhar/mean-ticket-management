const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  name: { type: String, unique: true },
  supervisor: { type: mongoose.Schema.Types.ObjectId, ref: "Engineer" },
  engineers: [{ type: mongoose.Schema.Types.ObjectId, ref: "Engineer" }],
});
const Team=mongoose.model('Team',TeamSchema)
module.exports=Team