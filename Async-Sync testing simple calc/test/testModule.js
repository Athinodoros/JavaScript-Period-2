/**
 * Created by Athinodoros on 2/3/2016.
 */


var expect = require("chai").expect;
var adder = require("../module");
describe("Test calculator", function () {


    it("should return 4", function () {
        expect(adder.add(2, 2)).to.be.equal(4);
    });


    it("Should return 10 async " , function(done){
        adder.addAsync(5,5,function(res){
            expect(res).to.be.equal(10);
            done();
        })
    })
});