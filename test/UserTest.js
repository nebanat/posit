/*eslint-disable */
process.env.NODE_ENV = 'test';

import chai from 'chai';
import chaiHttp from 'chai-http';
// import hello from '../server/hello';
import models from '../server/models';
import app from '../app';

// const assert = chai.assert;
const should = chai.should();

chai.use(chaiHttp);

describe('User model and routes', () => {
  before((done) => {
    models.User.destroy({
      truncate: true,
      cascade: true,
      restartIdentity: true
    })
      .then(() => {
        done();
      });
  });
  describe('User Routes', () => {
    it('should get all users', (done) => {
      chai.request(app)
        .get('/api/user/all')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
    it('should return username is required on signup', (done) => {
      chai.request(app)
        .post('/api/user/signup')
        .type('form')
        .send({
          email: 'testuseremail@gmail.com',
          password: 'testpassword2'
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.message.should.be.eql('username is required');
          done();
        });
    });
    it('should return email is required on signup', (done) => {
      chai.request(app)
        .post('/api/user/signup')
        .type('form')
        .send({
          username: 'anothertestuser',
          password: 'testpassword2'
        })
        .end((err, res) => {
          res.should.have.status(400);
          res.body.message.should.be.eql('email is required');
          done();
        });
    });
    it('should signup the user', (done) => {
      chai.request(app)
        .post('/api/user/signup')
        .type('form')
        .send({
          username: 'testuser',
          email: 'testuseremail@gmail.com',
          password: 'testpassword2'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.message.should.be.eql('Signup successful');
          res.body.username.should.be.eql('testuser');
          res.body.email.should.be.eql('testuseremail@gmail.com');
          done();
        });
    });
    it('should return username is required on signin', (done) => {
        chai.request(app)
          .post('/api/user/signin')
          .type('form')
          .send({
            password: 'testpassword2'
          })
          .end((err, res) => {
            res.should.have.status(400);
            res.body.message.should.be.eql('Please enter username');
            should.not.exist(res.body.token)
            done();
          });
      });
      it('should return password is required on signin', (done) => {
        chai.request(app)
          .post('/api/user/signin')
          .type('form')
          .send({
            username: 'testuser',  
          })
          .end((err, res) => {
            res.should.have.status(400);
            res.body.message.should.be.eql('Please enter password');
            should.not.exist(res.body.token)
            done();
          });
      });

    it('should signin the user and create token', (done) => {
      chai.request(app)
        .post('/api/user/signin')
        .type('form')
        .send({
          username: 'testuser',
          password: 'testpassword2'
        })
        .end((err, res) => {
          res.should.have.status(200);
          res.body.message.should.be.eql('Welcome testuser');
          should.exist(res.body.token)
          done();
        });
    });
    it('should return username is already taken', (done) => {
      chai.request(app)
        .post('/api/user/signup')
        .type('form')
        .send({
          username: 'testuser',
          email: 'anothertestuseremail@gmail.com',
          password: 'testpassword2'
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
    it('should return email is already taken', (done) => {
      chai.request(app)
        .post('/api/user/signup')
        .type('form')
        .send({
          username: 'anothertestuser',
          email: 'testuseremail@gmail.com',
          password: 'testpassword2'
        })
        .end((err, res) => {
          res.should.have.status(400);
          done();
        });
    });
  });
  // end of user routes describe//
  describe('User model', () => {
    it('should create an instance of user and hash password', () => {
      models.User.create({
        username: 'testuser2',
        email: 'testuser2email@gmail.com',
        password: 'testpassword'
      })
        .then((user) => {
          user.username.should.be.eql('testuser2');
          user.email.should.be.eql('testuser2email@gmail.com');
          user.password.should.be.eql('testpassword');
        });
    });
  });
  // end of user model describe//
});
// end of user test//
