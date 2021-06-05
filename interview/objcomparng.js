(function(){
     const biki1 = {name : "Bikram"};
     const biki2 = {name : "Bikram"};
     const biki3 = biki1;
     console.log(biki1 === biki2);//false
     console.log(biki1 === biki3);//true
})();
/*well, for 2 objects to be equal,both of the objects 
should point to the same memory location otherwise
even if the content of 2 objects are the same ,js 
treats them as different.
*/
