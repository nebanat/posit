import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import models from '../server/models';

process.env.NODE_ENV = 'test';
const should = chai.should();

chai.use(chaiHttp);

models.User.destroy({
  where: {},
  cascade: true,
  truncate: true
});

models.Group.destroy({
  where: {},
  cascade: true,
  truncate: true
});

models.Message.destroy({
  where: {},
  cascade: true,
  truncate: true
});

describe('test app', () => {
  describe('create user: ', () => {
    it('POST /api/user/signup creates a new user', (done) => {
      chai.request(app)
        .post('/api/user/signup')
        .type('form')
        .send({
          password: 'testpassword',
          username: 'testusername',
          email: 'test@user.com'
        })
        .end((err, res) => {
          res.body.email.should.equal('test@user.com');
          res.should.have.status(201);
          done();
        });
    });
  });
});
