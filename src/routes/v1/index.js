const express = require("express");

const ticketController = require("../../controllers/ticket-controller");

const router = express.Router();

router.post("/createTicket", ticketController.create);

module.exports = router;
