//checking odd even;
/* function check(num){
    if(num % 2 == 0){
        return 'Even';
    }
    if(num % 2 == 1){
        return 'odd';
    }
}
console.log(check(909898787));
 */

 //area of a circle
/*  function area(radius){
  let area = 3.1416*radius*radius;
  return area;
 }
 console.log(area(9)); */

 // swap value of 2 variables
 let n1 = 1;
 let n2 = 2;
/* 
 let temp = n1;
 n1=n2;
 n2=temp;
 console.log("n1",n1,"n2",n2); */

 //without temporary variable
/* n1=n1+n2;
n2=n1-n2;
n1=n1-n2;
console.log("n1",n1,"n2",n2);
n1=n1*n2;
n2=n1/n2;
n1=n1/n2; */

// finding min & max between 2 numbers;
/* function min_max(n1,n2){
    let min = n1 > n2 ? n2 : n1;
    let max = n1 > n2 ? n1 : n2;
    console.log("min",min,"max",max);
}
min_max(1,3); */    

//finding min & max among 3 numbers;

function min_max(n1,n2,n3){
    let min = n1 < n2 && n1 < n3 ? n1 : n2 <n1 && n2 < n3 ? n2 : n3;
    let max = n1 > n2 && n1 > n3 ? n1 : n2 > n1 && n2 >n3 ? n2 : n3;
    //console.log("min",min,"max",max); 
}
//min_max(22,33,223);
function reverseInPlace(str){
    return str.split(' ').reverse().join(' ').split('').reverse().join('');
  }
  
  //console.log(reverseInPlace('i am the good boy'));
  //greatest common divisor
  function gcd(a,b){
      let divisor = 2,
      greatestdivsr=1;
      if (a<2 ||b<2)
      return 1;
      while(a>= divisor && b>= divisor){
          if(a % divisor == 0 && b% divisor ==0){
              greatestdivsr = divisor;
          }
          divisor++;
      }
      return greatestdivsr;
  }
  console.log(gcd(25,250));

  //fibonacci;

  function fibonacci(n){
      var fibo =[0,1];
      if (n <= 2) return 1;
      for (var i =2; i<=n; i++){
          fibo[i] = fibo[i-1]+fibo[i-2];
      }
      return fibo[n];
    }
    //console.log(fibonacci(12));
    function rand5(){
    return 1 + Math.random()*4;
}


function rand7(){
    return 5+rand5()/5*2;
}

var z = [1,1,2,9,9,8,7,6,6,5];

function reverse (str) {
    if (str === "") {
        return "";
    } else {                            
        return reverse(str.substr(1)) + str.charAt(0);
    }
}
console.log(reverse("i am a boy"));

//check palindrome
function checkPalindrom(str){
    return str == str.split('').reverse().join('');
}
console.log(checkPalindrom('toyota'));

//check palindrome with forloop
function isPalindrome(str){
    var i,len = str.length;
    for(i=0;i<len/2;i++){
        if (str[i]!== str[len -1 -i])
        return false;
    }
    return true;
}
console.log(isPalindrome('madam'));
//missing no.
function missingNumber(ar){
    var n = ar.length+1,
    sum=0,
    expectedSum = n* (n+1)/2;
    for(var i =0, len = ar.length; i <len; i++){
        sum += ar[i];
    }
    return expectedSum -sum;
}
console.log(missingNumber([1,2,3,4,6]));
