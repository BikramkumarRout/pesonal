function sumFinder(arr,sum){
    var len = arr.length;
    for(var i =0;i<len-1;i++){
        for(var j=i+1;j<len;j++){
            if(arr[i] + arr[j] == sum)
            return true;
        }
    }
    return false;
}
console.log(sumFinder([1,2,3,5,7],8));