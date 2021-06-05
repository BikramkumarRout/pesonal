function outest() {
    let c= 1;
     return function outer(b) {
      function inner() {
          console.log(a,b,c);
      }
      let a = 2;
      return inner();
    }
}
 outest()("hi");


/* function outer() {
    let a = 1;
    function inner() {
        console.log(a);
    }
    return inner;
}
outer()(); */// extra paranthesis return the inner function

/* var close = outer();
close(); */