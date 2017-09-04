/* const expect = require('chai').expect;
const Calculate = require('../src/sum');
describe('Test class Calculate', () => {
  let calculate;
  beforeEach(() => {
    calculate = new Calculate();
  })
  it('should be success when value1 = 10, value2 = 15, expected 25', () => {
    // arrange
    const value1 = 10;
    const value2 = 15;
    // act
    const total = calculate.sum(value1, value2);
    // assert
    expect(25).to.be.equal(total);
  });
}); */


//Node assert ---------------------------------------------------------------
/*
var assert = require("assert"); // core module
var jsdom = require('jsdom');
var test1 = require('../public/javascripts/global');  // our module
var myCode = require('./functions.js');  // our module


describe('global', function(){
  describe('Module user list', function(){
    it('should have a populate Method', function(){
      //assert.equal(typeof populateTable, 'object');s
      //assert.equal(test1.populateTable(),2,"testfail");
      assert.equal(test1.showUserInfo(),2,"testfail");
    })
  })
});
describe('tests', function(){
    describe('testFunction', function(){
        it('should return 1', function(){
            // Call the exported function from the module
            assert.equal(myCode.testFunction(),1,"error"); //assert module
        })
    })
});

*/

// /Node assert --------------------------------------------------------------

/*
// node supertest 
const request = require('supertest');
const server = require('../app');

describe('test database connecting', function(){
        it('should response ok when call add',function(done){
            request(server)
                .get('/users/userlist')
                .expect(200, done);
                //.expect("fizz", done);
        });
});


// /node supertest -------------------------------------------------------------
*/


// Chai assert module ----------------------------------------------------------
"use strict";
var  chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai'); 
var jq = require('jquery');
var jsdom = require('jsdom').jsdom;
const  chaitest = require('../public/javascripts/global');
var expect = chai.expect;
var assert = chai.assert;
chai.use(sinonChai);

/*describe('Sinon-Chai test "SPY"', function(){
  it('expect test',function(){
    var c =
    
  })
})*/
//expect(foo).to.be.a('string');
// Sinon =======================================================================
function hello(name, cb){
  var x = "test";
  cb("hello " + name);
}

function testMe(callback){
  callback();
}

const user ={
  // ..
  setName: function(name){
    this.name = name;
  }
}
describe("hello", function (){
  it("should call callback with correct greeting", function(){
    var cb = sinon.spy();
    var x = sinon.spy();

    hello("foo",cb);
    
    expect(cb).to.have.been.calledWith("hello foo");
    

  });
});

describe("testMe function", function (){
  it("should call the callback", function(){
   let callbackSpy = sinon.spy()
   testMe(callbackSpy)
   expect(callbackSpy).to.have.been.calledOnce
  });
});

describe("setName function", function (){
  it("should call with name", function(){
   let setNameSpy = sinon.spy(user, 'setName')

   user.setName('Harry Potter')
   expect(setNameSpy).to.have.been.calledOnce
   expect(setNameSpy).to.have.been.calledWith('Harry Potter')

   // Important! Remove the spy at end to prevent future errors
   setNameSpy.restore()
  });
});
// Sinon ===================================================================

// Stubs-Example for Ajax call #1===========================================
function saveUser(user, callback){
  jq.post('/users/userlist', {
    first: user.firstname,
    last: user.lastname
  },callback)
}
describe("saveUser", function (){
  it("should call callback after saving", function(){
   let post = sinon.stub(jq,'post') // prevent sending the post request
   post.yields() // make the stub call the 1st callback it receives
   let callbackSpy = sinon.spy() // use a spy as the callback
   let testUser = { firstname: 'Severus', lastname: 'Snape'}

   saveUser(testUser, callbackSpy)

   expect(callbackSpy).to.have.been.calledOnce

   post.restore()

  });
});

// Stubs-Example for Ajax call #1===========================================



