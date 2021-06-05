function person(first,last,age,gender,interest){
    this.name = {
        'first': first,
        'last' : last
    };
    this.age = age;
    this.gender = gender;
}
let person1 = new person('Bob','smith',32,'male',['music','song']);
console.log(person1);