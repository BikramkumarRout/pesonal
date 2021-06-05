/* let a = [...[1,2,3], ...[4,5,6]];
let a = String([...[1,2,3], ...[4,5,6]]);
console.log(a);
 */
function mergeArray(ar1,ar2){
return String([...[ar1], ...[ar2]]);

}
console.log(mergeArray([1,2,3],[5,6,7]));