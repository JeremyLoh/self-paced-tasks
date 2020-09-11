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

  // Test the GET route
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
});
