function rand5(){
    return 1 + Math.random()* 4;
}
console.log(rand5());
function rand7(){
    return 5 + rand5()/5*2;
}
//console.log(rand7());