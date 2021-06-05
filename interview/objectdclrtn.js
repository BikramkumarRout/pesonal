// function based(for creating similar objects)
function Employee(fName,lName,age,salary){
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.salary = salary;
}
//creating multiple object having similar property different value assigned
var emp1 = new Employee('biki','rout',24,'5000$');
var emp2 = new Employee('rock','rout',34,'7000$');
//console.log(emp1,emp2)

// object literal(Best way to create a object)
var obj = {
    name: 'Biki',
    salary: 45000,
    getName: function() {
        return this.name;
    }
}
//console.log(obj);
// using new key word
var employee = new Object();
employee.name ='biki';
employee.getName = function(){
    return this.name;
};
//console.log(employee);

//using object.create method
var ad = Object.create(null);
ad.name = 'Bikram';
console.log(ad);