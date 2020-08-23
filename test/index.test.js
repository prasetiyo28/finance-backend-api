const chai = require("chai");
const chatHttp = require("chai-http");
require("chai/register-should");
const app = require("../app");

chai.use(chatHttp);
const expect = chai.expect;


// const user = { 
//     "username" : "kimballcho",
//     "password" : "12345678"
// } 


describe("Testing get all account list: ", () => {
    it("should getting all account list", done => {

        chai
            .request(app)
            .get("/account/user-account")
            .set("Accept", "application/json")
            .set("access_token", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImtpbWJhbGxjaG8iLCJlbWFpbCI6ImtpbWJhbGxjaG9AZ21haWwuY29tIiwiaWF0Ijox')
            .then(result => {
                expect(result.status).to.equal(200);
                done();
            }).catch(error => {
                done(error);
            });

    });
});

describe("Testing get all transaction list: ", () => {
    it("should getting all transaction list", done => {

        chai
            .request(app)
            .get("/transaction/user-transaction")
            .set("Accept", "application/json")
            .set("access_token", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImtpbWJhbGxjaG8iLCJlbWFpbCI6ImtpbWJhbGxjaG9AZ21haWwuY29tIiwiaWF0IjoxNTk4MDg1NjAwfQ.WK4ZNr9X6xQ2BRUnFQ_OqYnAzZ5ITkqlxfzbUwZ5_wM')
            .then(result => {
                expect(result.status).to.equal(200);
                done();
            }).catch(error => {
                done(error);
            });

    });
});