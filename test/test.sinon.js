"use strict";
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var expect = chai.expect;
var assert = chai.assert;
chai.use(sinonChai);
/*Spy test ========================================================================
class DB {
    constructor(connection){
        this.db = connection.db('db_name');
    }

    // save data to db
    save(data){
        this.db.save(data);
    }

    // get data to db
    get(id){
        return this.db.get(id);
    }
}
//var connection = '';

const db = new DB(connection);
const spy = sinon.spy(db, 'save');

db.save({text: "Hello"});

expect(spy.calledOnce).to.equal(true);
*/





// Stub test ========================================================================
class Document{
    constructor(db){
        this.db = db;
    }

    getData (id){
        return this.db.get(id);
    }
}


describe("stub test", function(){
    it("fake information return from fake db",function(){
// fake db object
var db={};

// stub the method
db.get = sinon.stub();

//specify argument and result to return
db.get.withArgs('abc_1').returns({id: 'abc_1', text: 'some text'});

const doc = new Document(db);

// expect result
expect(doc.getData('abc_1')).to.deep.equal({id: 'abc_1', text:'some text'});
    })
})

// Stub test ========================================================================
