//call attaches one function to another function by call Method & used for function arguments.
// apply is used for array values.
// bind attaches the object to method.

var obj = {num:2};
var addToThis = function(a,b,c){
    return this.num+a+b+c;
};
console.log(addToThis.call(obj,1,2,3));
var arr = [1,2,3];
console.log(addToThis.apply(obj,arr));
var bound = addToThis.bind(obj);
console.log(bound(1,2,39));

