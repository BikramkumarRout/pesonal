let arr = [1,2,3,4,5];
let rslt = arr.reduce((a,b)=>a+b);
console.log(rslt);
let ar=0;
for(var i in arr){
    ar += arr[i];
}
console.log(ar);

//for(var k in rr) { total += rr[k]; }/using for in loop
