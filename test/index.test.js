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


describe('Transaction Endpoint Userdetail', function () {
    let access; // access key container buat seluruh step di case
    before('Authenticate', function (done) { // before hooks buat auth
      chai
        .request(app)
        .post('/auth/login')
        .send({
          username: 'kimballcho',
          password: '12345678'
        }).then(res => {
          access = res.body.data.access_token;
          expect(res.status).to.equal(200);
          done();
        }).catch((err) => {
          done(err);
        });
    });
    describe('Getting User Transaction', function () {
      it('should successfully getting user transaction', function (done) {
        chai
          .request(app)
          .get('/transaction/user-transaction')
          .set('access_token', access)
          .then(result => {
            expect(result.status).to.equal(200);
            expect(result.body.data).to.be.an('object');
            done();
          }).catch(e => {
            done(e);
          });
      });
    });

    describe('Getting User Transaction By Id', function () {
        const idTransaction = 1;
        it('should successfully getting user transaction detail by id', function (done) {
          chai
            .request(app)
            .get('/transaction/user-transaction/' + idTransaction)
            .set('access_token', access)
            .then(result => {
              expect(result.status).to.equal(200);
              expect(result.body.data).to.be.an('object');
              done();
            }).catch(e => {
              done(e);
            });
        });
      });

      describe('Getting User Transaction By Id', function () {
        const idTransaction = 1;
        it('should successfully getting user transaction detail by id', function (done) {
          chai
            .request(app)
            .get('/transaction/user-transaction/' + idTransaction)
            .set('access_token', access)
            .then(result => {
              expect(result.status).to.equal(200);
              expect(result.body.data).to.be.an('object');
              done();
            }).catch(e => {
              done(e);
            });
        });
      });

      describe('Inserting User Transaction By Id', function () {
        it('should successfully insert user transaction', function (done) {
          chai
            .request(app)
            .post('/transaction/create-transaction')
            .set('access_token', access)
            .send({
                finance_name: "example2",
                id_account: 1,
                amount: 30000,
                description: null
            })
            .then(result => {
              expect(result.status).to.equal(200);
              expect(result.body.data).to.be.an('object');
              done();
            }).catch(e => {
              done(e);
            });
        });
      });

      describe('Inserting User Transaction', function () {
        it('should successfully insert user transaction', function (done) {
          chai
            .request(app)
            .post('/transaction/create-transaction')
            .set('access_token', access)
            .send({
                finance_name: "example2",
                id_account: 1,
                amount: 30000,
                description: null
            })
            .then(result => {
              expect(result.status).to.equal(200);
              expect(result.body.data).to.be.an('object');
              done();
            }).catch(e => {
              done(e);
            });
        });
      });

      describe('Update User Transaction', function () {
        it('should successfully update user transaction', function (done) {
          chai
            .request(app)
            .put('/transaction/update-transaction')
            .set('access_token', access)
            .send({
                id : 1,
                finance_name: "example_change",
                id_account: 1,
                amount: 30000,
                description: null
            })
            .then(result => {
              expect(result.status).to.equal(200);
              done();
            }).catch(e => {
              done(e);
            });
        });
      });

      describe('Delete User Transaction', function () {
        const idTranscation = 1;
        it('should delete user transaction', function (done) {
          chai
            .request(app)
            .delete('/transaction/delete/'+idTranscation)
            .set('access_token', access)
            .then(result => {
              expect(result.status).to.equal(200);
              done();
            }).catch(e => {
              done(e);
            });
        });
      });

      describe('Restore User Transaction', function () {
        const idTranscation = 1;
        it('should restore user transaction', function (done) {
          chai
            .request(app)
            .patch('/transaction/restore/'+idTranscation)
            .set('access_token', access)
            .then(result => {
              expect(result.status).to.equal(200);
              done();
            }).catch(e => {
              done(e);
            });
        });
      });

      describe('Get Monthly User Transaction', function () {
        it('should restore user transaction', function (done) {
          chai
            .request(app)
            .get('/transaction/monthly-report')
            .set('access_token', access)
            .then(result => {
              expect(result.status).to.equal(200);
              done();
            }).catch(e => {
              done(e);
            });
        });
      });

      describe('Get Daily User Transaction', function () {
        it('should restore user transaction', function (done) {
          chai
            .request(app)
            .get('/transaction/daily-report')
            .set('access_token', access)
            .then(result => {
              expect(result.status).to.equal(200);
              done();
            }).catch(e => {
              done(e);
            });
        });
      });


      describe('Getting User Account', function () {
        it('should successfully getting user account', function (done) {
          chai
            .request(app)
            .get('/account/user-account')
            .set('access_token', access)
            .then(result => {
              expect(result.status).to.equal(200);
              expect(result.body.data).to.be.an('object');
              done();
            }).catch(e => {
              done(e);
            });
        });
      });
  
      describe('Getting User Account By Id', function () {
          const idTransaction = 1;
          it('should successfully getting user account detail by id', function (done) {
            chai
              .request(app)
              .get('/account/user-account/' + idTransaction)
              .set('access_token', access)
              .then(result => {
                expect(result.status).to.equal(200);
                expect(result.body.data).to.be.an('object');
                done();
              }).catch(e => {
                done(e);
              });
          });
        });
  
        describe('Getting User Transaction By Id', function () {
          const idAccount = 1;
          it('should successfully getting user transaction detail by id', function (done) {
            chai
              .request(app)
              .get('/transaction/user-transaction/' + idAccount)
              .set('access_token', access)
              .then(result => {
                expect(result.status).to.equal(200);
                expect(result.body.data).to.be.an('object');
                done();
              }).catch(e => {
                done(e);
              });
          });
        });
        
        describe('Inserting User Accout', function () {
            it('should successfully insert user account', function (done) {
              chai
                .request(app)
                .post('/account/create-account')
                .set('access_token', access)
                .send({
                    name: "example_test",
                    type: "bank",
                    description: null
                })
                .then(result => {
                  expect(result.status).to.equal(200);
                  expect(result.body.data).to.be.an('object');
                  done();
                }).catch(e => {
                  done(e);
                });
            });
          });
    
          describe('Update User Account', function () {
            it('should successfully update user account', function (done) {
              chai
                .request(app)
                .put('/account/update-account')
                .set('access_token', access)
                .send({
                    id : 1,
                    name: "example_change",
                    description: null
                })
                .then(result => {
                  expect(result.status).to.equal(200);
                  done();
                }).catch(e => {
                  done(e);
                });
            });
          });
    
          describe('Delete User Account', function () {
            const idAccount = 1;
            it('should delete user transaction', function (done) {
              chai
                .request(app)
                .delete('/account/delete/'+idAccount)
                .set('access_token', access)
                .then(result => {
                  expect(result.status).to.equal(200);
                  done();
                }).catch(e => {
                  done(e);
                });
            });
          });
    
          describe('Restore User Account', function () {
            const idAccount = 1;
            it('should restore user transaction', function (done) {
              chai
                .request(app)
                .patch('/account/restore/'+idAccount)
                .set('access_token', access)
                .then(result => {
                  expect(result.status).to.equal(200);
                  done();
                }).catch(e => {
                  done(e);
                });
            });
          });

          describe('Logout User', function () {
            const idAccount = 1;
            it('should logout and delete key', function (done) {
              chai
                .request(app)
                .get('/auth/logout/')
                .set('access_token', access)
                .then(result => {
                  expect(result.status).to.equal(200);
                  done();
                }).catch(e => {
                  done(e);
                });
            });
          });
      
  });


  