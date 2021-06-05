var arr = [
    'first item',
    'second item is longer than the third one',
    'third longish item'
  ];
  
  var lgth = 0;
  var longest;
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
      var lgth = arr[i].length;
      longest = arr[i];
    }
  }
  
  console.log(longest);