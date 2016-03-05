/**
 * Created by Athinodoros on 5/3/2016.
 */
var request = require("request");
var URL = "http://news.com/api/headlines";

function getNewsHeadline(callback) {
    request(URL, function (error, response, body) {
        if(error || response.statusCode >=400){
            return callback(error || body );
        }
        callback(null,JSON.parse(body));
    });
};
module.exports = {
    getHeadline : getNewsHeadline
}

getNewsHeadline(function(err,joke){
    console.log(joke);
});