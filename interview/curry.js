/* function add(a){
    return function(b){
        return function(c){
            return a +b+c;
        }
    }
}
add(); */

const add = a => b => b ? add(a + b) : a; 
console.log(add(1)(2)(6)(5)());

function sum(a){
    return function(b){
        return b ? sum(a+b) : a;
    }
    
}
//sum(1,7,8);

console.log(sum(1)(2)(3)());