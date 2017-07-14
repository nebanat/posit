//import chaiHttp from 'chai-http';
import chai from 'chai';
import supertest from 'supertest';


//process.env.NODE_ENV = 'development';
const expect = chai.expect();

const api=supertest("http://localhost:3000")

//chai.use(chaiHttp);

describe('PostIt app test',()=>{
  describe('Unauthorized routes',()=>{
   it('should return a 401 unauthorized if user is not logged in',(done)=>{
    api.get('/api/group')
       .set('Accept','application/json')
       .expect(401,done)
   }) 
  it('should return a 401 unauthorized',(done)=>{
    api.get('/api/user/signout')
       .set('Accept','application/json')
       .expect(401,done)
 })
  it('should return a 401 unauthorized if user is not logged in',(done)=>{
    api.post('/api/group/1/message')
       .set('Accept','application/json')
       .expect(401,done)
  })
  it('should return a 401 unauthorized',(done)=>{
    api.get('/api/group/1/user')
       .set('Accept','application/json')
       .expect(401,done)
  })
  it('should return a 401 unauthorized',(done)=>{
    api.get('/api/group/1/message')
       .set('Accept','application/json')
       .expect(401,done)
  })
    
})
describe('')

})

 


