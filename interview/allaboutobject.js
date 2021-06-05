/* let obt = new Object();//"object constructor" syntax
let user = {};//"object literal",Best Way for creating a object
var user = Object.create(null);//Object.create method
function obt(name,age){
    this.name=name;
    this.age=age;
}//function based
var obt1= new obt('biki',26);//for creatingsimilarobject
 */
let name = "Bikram";
let object ={name:name};
let newObj ={name};
console.log(object['name']);//Bikram
console.log(newObj['name']);//Bikram
//accessing Object Properties:
//object[key] // bracket notation
//object.key //dot notation
const ob = {
    name:"Bikram",
    age:26,
    marks: {
        math:20,
        eng:30
    }
};
console.log(ob["marks"] ["math"]);//20
console.log(ob.marks.math);//20
// get values from an object:Object.values()
const ob1 = {
    age:26,
    mobile:8093650876,
    name:"Bikram"
}
const user = Object.values(ob1);//[26,80...76,"Bikram"]
console.log(user);

//get keys from an object:Object.keys()-return array of keys
const ob2 = {
    age:26,
    mobile:8093650876,
    name:"Bikram"
}
console.log(ob2);
const user3 = Object.keys(ob2);
console.log(user3);//['age','mobile','name']

//returns array of key/value pair:-Object.entries()
const ob3={
    age:26,
    mobile:8093650876,
    name:"Bikram"
}
const ob4 = Object.entries(ob3);
console.log(ob4);//[ [ 'age', 26 ], [ 'mobile', 8093650876 ], [ 'name', 'Bikram' ] ]

//Merging Object with Spread
const ob5={
    age:26,
    mobile:8093650876,
    name:"Bikram"
}
const ob6={
    ...ob5,
    location:'sikiri'
}
console.log(ob6);//{ age: 26, mobile: 8093650876, name: 'Bikram', location: 'sikiri'}

//combining 2 object:-Object.assign()

const ob7={
    dob:1994,
    name:"Bikram"
}
const ob8={
    age:26
}
const ob9 = Object.assign(ob7,ob8);
console.log(ob9);//{ dob: 1994, name: 'Bikram', age: 26 }

//freezing an object:-Object.freeze()/can't add or modify
const ob10 = {
    age:26,
    mobile:876,
    name:"Biki"
}
Object.freeze(ob10);
ob10.name ="Bikram";
console.log(ob10.name);//"Biki"

//object frozen or not:- object.isFrozen()
const ob11 ={
    age:26,
    mobile:876,
    name:"Biki"
}
console.log(Object.isFrozen(ob11));//false
Object.freeze(ob11);
console.log(Object.isFrozen(ob11));//true
//Sealing an object:-Object.seal()/can't add/remove but modify exsiting
const ob12={
    mobile:876,
    name:"Biki"
}
Object.seal(ob12);
ob12.name="Bikram";
console.log(ob12.name);//Bikram
ob12.age=26;
console.log(ob12.age);//undefined

//object sealed or not:-Object.isSealed()
const ob13 = {
    mobile:876,
    name:"Biki"
}
console.log(Object.isSealed(ob13));//false
Object.seal(ob13);
console.log(Object.isSealed(ob13));//true
//Localization:Object.toLocaleString()/returns string for local specific purposes
const date1 = new Date(Date.UTC(2020,12,05,2,1,0));
console.log(date1.toLocaleString('bn'));
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