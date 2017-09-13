// Assing Object.prototype to variable obj
var obj = Object.prototype;

// Make custom method "makeBig"
obj.makeBig = function(){
  return this.toUpperCase();
}

// Make custom method "reverse"
obj.reverse = function(){
  var objArray = [];
  var words = this;
  for(var i = 1 - words.length; i < 1; i++){
     var ea = words[-i];
     objArray.push(ea);
  }

  return String(objArray).replace(/,/g, "");
}

// Make custom method "makeCount"
obj.makeCount = function(){
  return this.length;
}

// Test-drive the cascading
console.log("Hiyafgrss".makeBig()
                       .reverse()
                       .makeCount()
           );    // 9
