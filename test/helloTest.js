import chai from 'chai';
import hello from '../server/hello';


const assert = chai.assert

const sayHelloResult = hello.sayHello()
const addNumberResult = hello.addNumbers(5,5)
const addNumberErrorString = hello.addNumbers(6,'hello')
const addNumberErrorLess5 = hello.addNumbers(1,1)

describe('App',()=>{
    //this run test for the say hello function
    describe('sayHello()',()=>{
        it('sayHello should return hello',()=>{
            assert.equal(sayHelloResult,'hello');
        });
        it('sayHello should return a string',()=>{
            assert.typeOf(sayHelloResult,'string');
        });
    })
    //this run test for the addNumbers function
    describe('addNumbers()', ()=>{
        it('addNumber should return value above 5', ()=>{
           assert.isAbove(addNumberResult,5);
        });
        it('addNumber should return error must be greater than 5', ()=>{
            assert.equal(addNumberErrorLess5,'error must be greater than 5')
        });
        it('addNumber should always return a number',()=>{
            assert.typeOf(addNumberResult,'number');
        });
        it('addNumber should throw an error result returns a string',()=>{
            assert.equal(addNumberErrorString,'enter a number');
        });
    })
    
   
})
