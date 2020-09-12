const contactModel = require("../contactModel");
const application = require("../index");

const mongoose = require("mongoose");
const chai = require("chai");
const chaiHttp = require("chai-http");
const assert = chai.assert;
chai.should();
const expect = chai.expect;

chai.use(chaiHttp);

describe("Contacts", function () {
  beforeEach(() => {
    // Remove all entries in db before running each test
    contactModel.deleteMany({}, (err) => {});
    contactModel.create(
      {
        name: "jeremy loh",
        email: "test@example.com",
        phone: "12345678",
        gender: "Male",
      },
      (err, contact) => {}
    );
  });

  describe("GET request for localhost:8080/api/contacts", () => {
    // individual test (it)
    it("it should get all the contacts in db", (done) => {
      chai
        .request(application)
        .get("/api/contacts")
        .set("content-type", "application/x-www-form-urlencoded")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          // res.body should have 3 keys (status, message and data)
          Object.keys(res.body).length.should.be.eql(3);
          // 1 entry in database
          res.body.data.length.should.be.eql(1);
          done();
        });
    });
  });

  describe("POST request for localhost:8080/api/contacts", () => {
    it("it should create a new contact", (done) => {
      const name = "Test";
      const email = "test@example.com";
      const phone = "999";
      const gender = "Male";

      chai
        .request(application)
        .post("/api/contacts")
        .set("content-type", "application/x-www-form-urlencoded")
        .send({
          name: name,
          email: email,
          phone: phone,
          gender: gender,
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a("object");
          // res.body should have 2 keys (message and data)
          Object.keys(res.body).length.should.be.eql(2);
          // Check if created contact matches
          const contact = res.body.data;
          contact.name.should.be.eql(name);
          contact.email.should.be.eql(email);
          contact.phone.should.be.eql(phone);
          contact.gender.should.be.eql(gender);
          done();
        });
    });
  });

  describe("Tests for localhost:8080/api/contacts/:contact_id", () => {
    it("GET request: it should obtain the first contact created in beforeEach", (done) => {
      // Get contact_id
      chai
        .request(application)
        .get("/api/contacts")
        .set("content-type", "application/x-www-form-urlencoded")
        .end((err, res) => {
          if (err) {
            expect.fail("Could not obtain first contact_id");
          }
          const contact_id = res.body.data[0]._id;
          chai
            .request(application)
            .get("/api/contacts/" + contact_id)
            .set("content-type", "application/x-www-form-urlencoded")
            .end((err, res) => {
              if (err) {
                expect.fail("Could not get first contact");
              }
              res.should.be.status(200);
              res.body.status.should.be.eql("success");
              const contact = res.body.data;
              contact._id.should.be.eql(contact_id);
              done();
            });
        });
    });

    it("PATCH request: it should update the first contact's name created in beforeEach", (done) => {
      const newName = "Test";
      chai
        .request(application)
        .get("/api/contacts/")
        .set("content-type", "application/x-www-form-urlencoded")
        .end((err, res) => {
          if (err) {
            expect.fail("Could not obtain first contact_id");
          }
          const contact = res.body.data[0];
          const contact_id = contact._id;
          const email = contact.email;
          const phone = contact.phone;
          const gender = contact.gender;
          // Attempt to update contact
          chai
            .request(application)
            .patch("/api/contacts/" + contact_id)
            .send({
              name: newName,
            })
            .set("content-type", "application/x-www-form-urlencoded")
            .end((err, res) => {
              if (err) {
                expect.fail("Could not update first contact");
              }
              res.should.be.status(200);
              const contact = res.body.data;
              contact._id.should.be.eql(contact_id);
              contact.name.should.be.eql(newName);
              contact.email.should.be.eql(email);
              contact.phone.should.be.eql(phone);
              contact.gender.should.be.eql(gender);
              done();
            });
        });
    });

    it("PUT request: it should update the first contact's name created in beforeEach", (done) => {
      const newName = "Test";
      chai
        .request(application)
        .get("/api/contacts/")
        .set("content-type", "application/x-www-form-urlencoded")
        .end((err, res) => {
          if (err) {
            expect.fail("Could not obtain first contact_id");
          }
          const contact = res.body.data[0];
          const contact_id = contact._id;
          const email = contact.email;
          const phone = contact.phone;
          const gender = contact.gender;
          // Attempt to update contact
          chai
            .request(application)
            .put("/api/contacts/" + contact_id)
            .send({
              name: newName,
            })
            .set("content-type", "application/x-www-form-urlencoded")
            .end((err, res) => {
              if (err) {
                expect.fail("Could not update first contact");
              }
              res.should.be.status(200);
              const contact = res.body.data;
              contact._id.should.be.eql(contact_id);
              contact.name.should.be.eql(newName);
              contact.email.should.be.eql(email);
              contact.phone.should.be.eql(phone);
              contact.gender.should.be.eql(gender);
              done();
            });
        });
    });

    it("DELETE request: it should delete the first contact created in beforeEach", (done) => {
      chai
        .request(application)
        .get("/api/contacts")
        .set("content-type", "application/x-www-form-urlencoded")
        .end((err, res) => {
          if (err) {
            expect.fail("Could not obtain first contact_id");
          }
          res.should.be.status(200);
          const contact_id = res.body.data[0]._id;
          // Attempt to delete contact
          chai
            .request(application)
            .delete("/api/contacts/" + contact_id)
            .set("content-type", "application/x-www-form-urlencoded")
            .end((err, res) => {
              if (err) {
                expect.fail("Could not delete first contact");
              }
              res.should.be.status(200);
              res.body.status.should.be.eql("success");
              res.body.message.should.be.eql("Contact deleted");
              done();
            });
        });
    });
  });
});
