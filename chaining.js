// Assing Object.prototype to variable obj
var obj = Object.prototype;

// Make custom method "reverseString"
obj.reverseString = function(){
  if(String(this) === ""){
    return "Error: empty string.";
  }else{
    var stringToArray = this.split(""); // Turn the string into an array
    var reversedArray = stringToArray.reverse();    // Use the reverse array method to flip the contents of the string
    return String(reversedArray).replace(/,/g, ""); // Remove all the commas and return the new string
  }
}


// Make a custom method "capitalize"
obj.capitalize = function(){
  if(String(this) === ""){
    return "Error: empty string.";
  }else{
    var entireStringToLower = this.toLowerCase();
    var stringIntoArray = entireStringToLower.split("");
    stringIntoArray[0] = stringIntoArray[0].toUpperCase();
    return String(stringIntoArray).replace(/,/g, "");
  }
}


console.log("".capitalize());
console.log("".reverseString().capitalize());
