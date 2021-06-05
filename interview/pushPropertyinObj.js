let obj={
    name:"biki",
    salary:45000
};
let obj1={phone:98989,
    home:787878}
    //using for in loop
for (var prop in obj1) {
    if (obj1.hasOwnProperty(prop)) {
        obj[prop] = obj1[prop];
    }
}
console.log(obj);
//using Object.assign()
let obj2={name:"biki",city:"bam"};
let obj3=Object.assign({status:"single"},obj2);
console.log(obj3);
//using spread operator
let obj4={name:"bikram",city:"Bam"};
let obj5={employee:false,...obj4};
console.log(obj5);