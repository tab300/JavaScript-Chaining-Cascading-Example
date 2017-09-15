// Assing Object.prototype to variable obj
var obj = Object.prototype;

// Make custom method "reverseString"
obj.reverseString = function(){
  var k = this.split("");
  var j = k.reverse();
  return String(j).replace(/,/g, "");
}

// Make a custom method "capitalize"
obj.capitalize = function(){
  var l = this.toLowerCase();
  var k = l.split("");
  k[0] = k[0].toUpperCase();
  return String(k).replace(/,/g, "");
}



console.log("MaDmAn".reverseString().capitalize());
console.log("DisaPPear".capitalize());
