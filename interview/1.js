function sumFinder(arr, sum) {
    let len = arr.length;
    let ar1 = [];
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] + arr[j] == sum)
                ar1.push([arr[i], arr[j]]);
        }
    }
    return ar1;
}

console.log(sumFinder([6, 4, 3, 2, 1, 7], 9));

var arr2 = ["hi", "hello", "bikram"]
var longest = arr2.reduce((a, b) => a.length > b.length ? a : b);

console.log(longest);

//reverse an array without builtin methods

var rslt = [];
function reverse(ar) {
    for (let i = ar.length-1; i >= 0; i--) {
        console.log(i, ar[i]);
        rslt.push(ar[i]);
    }
       return rslt;
}
//     for (let i = 0; i < ar.length; i++) {
//         console.log(i, ar[i]);
//         rslt.push(ar.pop());
//     }
//     return rslt;
// }
console.log(reverse([1, 2, 3, 4, 5, 6]));
console.log(rslt);

let are = [1, 2, 3, 4, 5];
// let are1= are.reduce((a,b)=>a+b);
total = 0;

// for (let i in are) {
// total += are[i]
// for (let i of are) {
//     total += i
// }
for(let i=0; i<are.length;i++){
   total +=are[i];
}
console.log(total);