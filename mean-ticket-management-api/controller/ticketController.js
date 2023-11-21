const Ticket = require("../models/ticket.model");
const Engineer = require("../models/engineer.model");

//Controller to Create Ticket
exports.createTicket = async (req, res) => {
  try {
    const { name, address, mobileNumber, emailId, flavor } = req.body;

    const existingTicket = await Ticket.findOne({
      mobileNumber,
      status: { $ne: "Closed" },
    });

    if (existingTicket) {
      res.status(400).json({
        error: "An open ticket with the same mobile number already exists",
      });
      return; // Return early to stop further execution
    }

    const ticket = new Ticket({
      name,
      address: {
        address: address.address, // Update here
        pin: address.pin, // Update here
      },
      mobileNumber,
      flavor,
      emailId,
      status: "Open",
    });

    await ticket.save();

    res.status(201).json(ticket);
  } catch (error) {
    console.error("Error creating ticket:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


//Controller for searching ticket
exports.searchTicket = async (req, res) => {
  try {
    const { searchTerm } = req.query;
    const tickets = await Ticket.find({
      $or: [
        { name: { $regex: searchTerm, $options: "i" } },
        { mobileNumber: { $regex: searchTerm, $options: "i" } },
        { emailId: { $regex: searchTerm, $options: "i" } },
        { _id: searchTerm },
      ],
    });
    res.status(200).json(tickets);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Controller for updating ticket status by engineers

exports.updateTicketStatus = async (req, res) => {
  try {
    const { ticketId, status } = req.body;
    const validStatusValues = [
      "Accepted",
      "Rejected",
      "On the way",
      "Work in progress",
      "Completed",
    ];
    if (!validStatusValues.includes(status)) {
      return res.status(400).json({ error: "Invalid Status Value" });
    }
    const updatedTicket = await Ticket.findByIdAndUpdate(
      ticketId,
      { status },
      { new: true }
    );
    if (!updatedTicket) {
      return res.status(404).json({ error: "Ticket not found" });
    }

    res.status(200).json(updatedTicket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Controller for closing ticket by the call center

exports.closeTicket = async (req, res) => {
  try {
    const { ticketId } = req.body;
    const closedTicket = await Ticket.findByIdAndUpdate(
      ticketId,
      { status: "Closed" },
      { new: true }
    );
    if (!closedTicket) {
      res.status(404).json({ error: "Ticket not found" });
    }
    res.status(200).json(closedTicket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server error" });
  }
};

//Controller for supervisor to assign ticket to engineer

exports.assignTicketToEngineer = async (req, res) => {
  try {
    const { ticketId, engineerId } = req.body;
    const engineer = await Engineer.findById(engineerId);
    if (!engineer) {
      return res.status(404).json({ error: ":/ Engineer not found" });
    }
    const ticket = await Ticket.findByIdAndUpdate(
      ticketId,
      { assignedEngineer: engineerId, status: "Assigned" },
      { new: true }
    );
    if (!ticket) {
      return res.status(404).json({ error: "Ticket not Found" });
    }
    res.status(200).json(ticket);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};