let array = [1,2,3];
array.shift(array.includes(2));
console.log(array);//[2,3]
let arr =[1,2,3];
arr.push(arr.pop());
//arr.push(arr.pop());
console.log(arr);//[1,2,3]
let current_month = new Date().getMonth();
let current_year = new Date().getFullYear();
console.log(current_month);//11
console.log(current_year);//2020
let str = "drawer";
let palindrome = str.split("").reverse().join("");
console.log(palindrome);//reward
const ar =[1,2,3,4];
let find = ar.find(x=>x==2);
let filter = ar.filter(x=> x==2);
console.log(find);//2
console.log(filter);//[2]
const square = (value)=>value*value;
square(10);
let value = square(square(square(10)));
console.log(value);
let arr1 = [1,[2]];
let arr2 = [1, [2]];
let setter = new Set(arr1);
arr2 = arr1;
console.log(Array.isArray(arr2));
function isPrime(num){
    let prime = true;
    for(let i=2; i<num;i++){
        prime =(num % i == 0) ? false: true;
        if(!prime)
        break;
    }
    return prime;
}
console.log(isPrime(2));
console.log(isPrime(35));
let ar =["1","2","3",4,"9"];
let max = Math.max(...ar);
console.log(max);//9