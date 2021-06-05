var b= function (){
    var arr = [1,2,3,4];
    var max= Math.max.apply(null,arr);
    console.log(max);
    arr.splice(arr.indexOf(max),1);
console.log(arr);
return Math.max.apply(null,arr);
};
b();