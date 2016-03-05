/**
 * Created by Athinodoros on 5/3/2016.
 */
var expect = require("chai").expect;
var headlines = require("../module");
var nock = require("nock");
var testHeadline = {"id": 1234, "joke": "ha ha ha", "reference": "Noegel avis"};

var n = nock('http://news.com');

describe('Person API Get', function () {
    before(function (done) {
        n.get('/api/headlines')
            .reply(200,testHeadline );
        done();
    });

    it('should fetch the sun in copenhagen joke', function (done) {
        headlines.getHeadline(function (err, headlinemock) {
            if (err) {
                throw err;
            }
            expect(headlinemock.reference).to.be.equal("Noegel avis");
            expect(headlinemock).to.be.eql(testHeadline);
            done();
        })
    });
});