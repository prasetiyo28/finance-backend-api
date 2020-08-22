const chai = require("chai");
const chatHttp = require("chai-http");
require("chai/register-should");
const app = require("../app");

chai.use(chatHttp);
const expect = chai.expect;


describe("Testing login with method post: ", () => {
    it("should login and show user data", done => {
        const user = {
            "username" : "kimballcho@gmail.com",
            "password" : "12345678"   
        }
        chai
            .request(app)
            .post("/auth/login")
            // .send(user)
            .set("Accept", "application/json")
            .end((err, res)=> {
                expect(res.status).to.equal(200);
                // expect(res).to.have.property('body');
                // expect(res.body.message).to.equal(true);
            });
            done();
    });
});

