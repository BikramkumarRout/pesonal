for(let i =0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);//01234
    },1000)
}

var func = [];
for(var i = 0; i<5; i++){
    func[i] = function() {
        console.log(i);//5
    };
}
func[3]();

(function(){
    let a=b=5;
    console.log(b);//5
})();

