setTimeout(function(){
    console.log("timer");
},5000);

function x(y){
    console.log("x");
    y();
}
x(function y(){
    console.log("y");
});

//addEventListener
function attachEventListener(){
    let count = 0;
    document.getElementById("btn").addEventListener("click",function(){
        console.log("Button Clicked",++count);
    });
}
attachEventListener();