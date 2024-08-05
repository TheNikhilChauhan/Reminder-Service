const sender = require("../config/emailConfig");

const TicketRepository = require("../repository/ticket-repository");

const ticketRepo = new TicketRepository();

const sendBasicEmail = async (mailFrom, mailTo, mailSubject, mailBody) => {
  try {
    const response = sender.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: mailSubject,
      text: mailBody,
    });
  } catch (error) {
    console.log(error);
  }
};

const fetchPendingEmails = async (timestamp) => {
  try {
    const response = await ticketRepo.get({ status: "PENDING" });
    return response;
  } catch (error) {
    console.log(error);
  }
};

const createNotification = async (data) => {
  try {
    console.log(data);
    const response = await ticketRepo.create(data);
    return response;
  } catch (error) {
    console.log("Create notification error", error);
  }
};

const updateTicket = async (ticketId, data) => {
  try {
    const response = await ticketRepo.update(ticketId, data);
    return response;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  sendBasicEmail,
  fetchPendingEmails,
  createNotification,
  updateTicket,
};
