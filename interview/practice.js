(function(x){
    return (function(y){
        console.log(x);
    })(2)
})(1);//1

const fn = () =>{
    let a = 12;
    return () =>{
        a++;
        return a;
    }
};
//console.log(a);reference error

const fnRes = fn();
//alert(fnRes());
//alert(fnRes());//reference error

(function(){
    var a=b=5;
})();
console.log(b);//5-global scope

var obj = {a:1};
(function(obj){
    obj={a:2};
})(obj);
console.log(obj.a);//inside iife so cant access

var foo ={n:1};
var bar = foo;
foo.x=foo={n:2};
console.log(foo);//{n:2}

var w={};
(function d(w){
    w.w=10;//w become global/window object
    w=null;
})(w);
//console.log(w);

let i=0;
do{
    ++i;
    console.log(i);
}while(i<1);
const func = ()=>(console.log("js"),5);
console.log(func());//5

do{
    console.log("js");
    return;
} while(true);
