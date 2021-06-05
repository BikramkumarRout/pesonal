// simple example of setTimeout
/* 
function x() {
    let i = 1;
    setTimeout(function () { 
        console.log(i);
    },3000);
    console.log("Namaste JavaScript");
}
x(); */

/* function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(function () {
            console.log(i);
        }, i * 1000);
    }
    console.log("Namaste JavaScript");
}
x(); *///nj,1,2,3,4,5

//using var
function x() {
    for (var i = 0; i <= 5; i++) {
    function close(x){
        setTimeout(function(){
            console.log(x);
        },x*1000);
    }
        close(i);
    }
}
x();