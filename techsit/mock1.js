let x = {
    a: 1,
    b: 2
};
const arr = Object.values(x);
console.log(arr);//[1,2]
const ar = [];
for (i in x) {
    ar.push(i);
}
console.log(ar);//['a','b']

let st = "hi";
let st1 = "ih"
const reverseStr = (str) => {
    return str.split('').reverse().join('')
}
console.log(reverseStr(st) === st1);//true

const obj = {
    a: 1,
    b: 2,
    getA() {
        console.log(this.a);
        return this;
    },
    getB() {
        console.log(this.b);
    }
};
obj.getA().getB();//1 2

//merge and sort 2 array

const a1 = [1, 2, 22, 3];
const a2 = [4, 55, 54];
const a3 = a1.concat(a2).sort((a, b) => a - b);
console.log(a3);

const a4 = [...a1, ...a2]
console.log(a4.sort());

const obj1 = {
    x: 1,
    getX() {
        const inner = function(){
            console.log(this.x);
            //this refers to current function,so-undefined
        }
        return inner();
    }
};
obj1.getX();

const obj2={
    y:1,
    getY(){
        const inner= () => 
            console.log(this.y);//1
        
        inner();
    }
};
obj2.getY();