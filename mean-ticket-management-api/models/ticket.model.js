const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    address: {
      type: String,
      required: true,
    },
    pin: {
      type: String,
      required: true,
    },
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  flavor: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Open",
  },
});

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
