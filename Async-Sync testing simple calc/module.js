/**
 * Created by Athinodoros on 2/3/2016.
 */

function add(n1,n2){
    return n1+n2;
};
function  addAsync(n1,n2,callback){
    var result;
    setTimeout(function(){
        result = n1+n2;
        callback(result);
    },1000);

};
var res = addAsync(5,5,function(res){
    console.log("Result : " + res);
});

module.exports.add =  add;
module.exports.addAsync =  addAsync;

console.log(res);