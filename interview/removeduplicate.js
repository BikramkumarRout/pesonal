let a = [1,2,3,2,1,8];
let b = [];
let len = a.length;
for(let i=0; i<len;i++){
    if(b.indexOf(a[i]) === -1){
     b.push(a[i]);
}
}
console.log(b);
console.log([...new Set (a)]);