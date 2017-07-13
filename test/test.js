import chai from'chai';

const expect = chai.expect();
chai.should();

/** eslint-disable valid-jsdoc*/
function returnsName(name) {
  return name;
}

describe('Employee',()=>{
    it('returns the name passed to the function',()=>{
        returnsName('Aaron').should.equal('Aaron');

    })

})

// describe('Salary',()=>{
    
// })
