const chai = require("chai");
const chatHttp = require("chai-http");
require("chai/register-should");
const app = require("../app");

chai.use(chatHttp);
const expect = chai.expect;

describe("Testing get all transaction list: ", () => {
    it("should getting all transaction list", done => {

        chai
            .request(app)
            .get("/transaction/user-transaction")
            .set("Accept", "application/json")
            .set("access_token", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImtpbWJhbGxjaG8iLCJlbWFpbCI6ImtpbWJhbGxjaG9AZ21haWwuY29tIiwiaWF0Ijox')
            .end((err, res)=> {
                res.should.have.status(200);
            });
            done();
    });
});
