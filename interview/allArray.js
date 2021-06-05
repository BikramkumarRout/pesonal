/* var a= new Array(1,2,3,4)-array constructor
var a = [1,2,3,4]-array literal */

var array1 = [1,2,3,4];
var array2 = [5,6,7,8];

//sum of 2 array using map function 

var sum = array1.map(function (a, i) {
  return a + array2[i];
});
console.log(sum);
var d=sum.reduce((x,y)=>x+y);
console.log(d);

//sum of 2 array using for loop

var a =[1,2,3,4];
var b=[5,6,7,8];
var total=[];
for(var i=0; i<a.length; i++){
    total.push(a[i]+b[i]);
}
console.log(total);

//join()-combining all entries

const ar1 = ['Hello','Bikram','Rout'];
const res = ar1.join('');
console.log(res);//Hello Bikram Rout
//sorting

var ar2 = [1,4,3,5,2,9,8];
const ar3 = ar2.sort((a,b)=>a-b);
console.log(ar3);
//merging

let ar0 = [...[1,2,3], ...[4,5,6]];
let a0 = String([...[1,2,3], ...[4,5,6]]);
console.log(a0);
function mergeArray(arr0,arr1){
return String([...[arr0], ...[arr1]]);
}
console.log(mergeArray([1,2,3],[5,6,7]));

//Removing Duplicate

const arr7=[1,2,2,3,3,1,5];//[...new Set(arr7)]
obj={};
const di = [...new Set(arr7)];//new Set(arr7);
console.log(di);
for(let i of arr7){
    obj[i]=true;
}
const ar8=Object.keys(obj);
console.log(ar8);

//returning Max and min

let a00 =["1","2","3",4,"9"];
let max = Math.max(...a00);//Math.min(...a00)
console.log(max);//9

//copy of an array:-

const ar4=[1,2,3,4];//Object.assign([],ar4);
const ar5 = ar4.slice();//[...ar4]/[].concat(ar4);le/JSON.parse(JSON.stringify(ar4));

//using a loop

const ar6=[];
for(let i=0;i<a.length;i++){
    ar6.push(ar4[i]);
}
console.log(ar5);

//sum of an array

var rr = [1,2,3,4];
//for(var k in rr) { total += rr[k]; }//using for in loop
//for(var k of rr) { total += k;}//using for of
var d = rr.reduce((x,y)=>x+y);//using reduce function
console.log(d)
//console.log(total,"total");

//using for loop

var rr2 = [1,2,44,3];
var tot=0;
for(var i=0;i<rr2.length;i++){
tot += rr2[i]
}
console.log(tot);
var x=[1,2,34,4,6,54,4,3];

//map
x.map(function(el,idx,arr){
    return console.log(el*el); 
})
//reduce

var sumx= x.reduce((j,k)=>j+k);
console.log(sumx);

//forEach

x.forEach(function(el,idx,arr){
    console.log(el);//idx,arr
})
x.forEach((el,idx,arr)=>console.log(arr));

//some

x.some((el,idx,arr)=>console.log(el>5));

//every

x.every((el,idx,arr)=>console.log(el>=0));

//filter-return all the matching condition

var fltr=x.filter((z)=>z>5);//[34,6,54]
console.log(fltr);

//find-return the 1st match

var fnd=x.find((f)=>f>5);
console.log(fnd);//34

//filter truthy value:-

var as=["biki","rock",0,'',false,0].filter(Boolean);
console.log(as);//['biki','rock']

//push

console.log(x.push(9));
console.log(x);

//pop

console.log(x.pop())
console.log(x);//[1,2,34,4,6,54,4]

//indexOf

console.log(x.indexOf(1))//0
//unshift
var xx=x.unshift(0);
console.log(xx);
//shift:-remove & returns the 1st element

var tt=x.shift();
console.log(tt); //0

//slice-return only

var sc=x.slice(2);
console.log(sc);//[34,4,6,54,4,3]

var sc1=x.slice(2,4);
console.log(sc1);[34,4]
//splice-return and remove el from array

var xx=[1,2,3,4,5]
var sp = xx.splice(2);
console.log(sp);//[3,4,5]