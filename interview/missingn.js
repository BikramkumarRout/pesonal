function missingNumber(arr) {
    var n = arr.length+1,
    sum = 0,
    len = arr.length,
    expectedSum = n*(n+1)/2;
    for(var i =0; i<len;i++){
        sum += arr[i];
    }
    return expectedSum -sum;
}
//console.log(missingNumber([1,2,3,5]));
//
function missingNum(nums){
    const numberArray = nums.sort((num1, num2)=>{
      return num1 - num2;
   });
   for (let i=0; i < numberArray.length; i++){
      if(i !== numberArray[i]){
        return i;
      }
   }
 }
 console.log(missingNum([0,3,5,8,4,6,1,9,7]))