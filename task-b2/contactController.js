const contactModel = require("./contactModel");

exports.index = (req, res) => {
  // View all contacts
  contactModel.find({}, (err, contacts) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Contacts retrieved successfully",
      data: contacts,
    });
  });
};

// Handle creation of contact
exports.new = (req, res) => {
  const contact = new contactModel();
  contact.name = req.body.name ? req.body.name : contact.name;
  contact.email = req.body.email ? req.body.email : contact.email;
  contact.phone = req.body.phone;
  contact.gender = req.body.gender;
  // Save the contact to db
  contact.save((err) => {
    if (err) {
      res.json(err);
    }
  });
  res.json({
    message: "Created a new contact successfully",
    data: contact,
  });
};

// Handle retrieval of contact
exports.view = (req, res) => {
  const contact_id = req.params.contact_id;
  contactModel.findById(contact_id, (err, contact) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    res.json({
      status: "success",
      message: "Contacts retrieved successfully",
      data: contact,
    });
  });
};

// Handle update of contact
exports.update = (req, res) => {
  const contact_id = req.params.contact_id;
  contactModel.findById(contact_id, (err, contact) => {
    if (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.email = req.body.email ? req.body.email : contact.email;
    contact.phone = req.body.phone ? req.body.phone : contact.phone;
    contact.gender = req.body.gender ? req.body.gender : contact.gender;
    contact.save((err) => {
      if (err) {
        res.json({
          status: "error",
          message: err,
        });
      }
      res.json({
        message: "Contact Info updated",
        data: contact,
      });
    });
  });
};
// Handle deletion of contact
