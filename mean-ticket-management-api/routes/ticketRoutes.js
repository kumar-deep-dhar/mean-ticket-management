const express = require("express");
const router = express.Router();
const ticketController = require("../controller/ticketController");

// Ticket Related Routes
router.post("/create", ticketController.createTicket);
router.get("/search", ticketController.searchTicket);
router.patch("/update-status", ticketController.updateTicketStatus);
router.put("/close-ticket", ticketController.closeTicket);
router.patch("/assign-ticket", ticketController.assignTicketToEngineer);

module.exports = router;
