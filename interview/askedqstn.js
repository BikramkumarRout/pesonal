ar = ["are", "are112w", "erdrg"];
ar2 = ar.map(function (x) { return x.replace(/112/g, "") });
console.log(ar2);//[ 'are', 'arew', 'erdrg' ]
ar3 = ar.filter(a => a.length < 6);
console.log(ar3);// [ 'are', 'erdrg' ]
var dirtyNumber = "513,835M bucks";
var cleanNumber = dirtyNumber.replace(/\d/g, '');
console.log(cleanNumber);//,M bucks
var qNumber = dirtyNumber.match(/\d/g, '');
console.log(qNumber);//[ '5', '1', '3', '8', '3', '5']
var onlyno = dirtyNumber.match(/\d+/g);
console.log(onlyno);//[ '513', '835' ]
var s = "-12345.50 €".replace(/[^\d.-]/g, '');
console.log(s);//-12345.50
var src = "1,2,3,4";
var ids = src.split(',').map(parseFloat);
console.log(ids);//[1,2,3,4]
var arr = ["1", 2, "3", 22];
var ints = arr.map(parseFloat);
console.log(ints);//[ 1, 2, 3, 22 ]
var longest = arr.reduce((a, b) => a.length > b.length ? a : b);
console.log(longest);//22
var even = arr.filter(n => n % 2 == 0);
console.log(even);
var dd = 'that JS Dude';
var fltr = [].filter.call(dd, function (el, idx) {
    return idx > 7;
});
console.log(fltr);//[ 'D', 'u', 'd', 'e' ]
console.log(Math.pow(2, 3));//8