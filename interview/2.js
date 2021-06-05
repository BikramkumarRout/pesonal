var rslt=[];
function revrs(ar){
    for (let i=ar.length;i>0;i--){
        console.log(i);
        rslt.push(ar.pop());
    }
    return rslt;
}
revrs([1,2,3,4]); 
console.log(rslt);
