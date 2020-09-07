// Import contact model
const Contact = require("./contactModel");

// Handle index actions
exports.index = (request, response) => {
  Contact.get((err, contacts) => {
    if (err) {
      response.json({
        status: "error",
        message: err,
      });
    }
    response.json({
      status: "success",
      message: "Contacts retrieved successfully",
      data: contacts,
    });
  });
};

// Handle create new contact action
exports.new = (request, response) => {
  const contact = new Contact();
  contact.name = req.body.name ? req.body.name : contact.name;
  contact.gender = req.body.gender;
  contact.email = req.body.email;
  contact.phone = req.body.phone;
  // Save the contact and check for errors
  contact.save((err) => {
    if (err) {
      response.json(err);
    }
  });

  response.json({
    message: "New contact created!",
    data: contact,
  });
};

// Handle view contact info
exports.view = (request, response) => {
  Contact.findById(req.params.contact_id, (err, contact) => {
    if (err) {
      response.send(err);
    }
    response.json({
      message: "Contact details loading...",
      data: contact,
    });
  });
};

// Handle update contact info
exports.update = (request, response) => {
  Contact.findById(req.params.contact_id, (err, contact) => {
    if (err) {
      response.send(err);
    }
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;
    // Save the contact and check for errors
    contact.save((err) => {
      if (err) {
        response.json(err);
      }
      response.json({
        message: "Contact Info updated",
        data: contact,
      });
    });
  });
};

// Handle delete contact
exports.delete = (request, response) => {
  Contact.remove({ _id: req.params.contact_id }, (err, contact) => {
    if (err) {
      response.send(err);
    }
    response.json({
      status: "success",
      message: "Contact deleted",
    });
  });
};
