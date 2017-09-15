// Assing Object.prototype to variable obj
var obj = Object.prototype;

// Make custom method "reverseString"
obj.reverseString = function(){
  // Check to see if the given string is empty or not
  if(String(this) === ""){
    return "Error: empty string or incompatible data type.";
  }else{
    // Turn the string into an array
    var stringToArray = this.split("");
    // Use the reverse array method to flip the contents of the string
    var reversedArray = stringToArray.reverse();
    // Remove all the commas and return the new string
    return String(reversedArray).replace(/,/g, "");
  }
}


// Make a custom method "capitalize"
obj.capitalize = function(){
  // Check to see if the given string is empty or not
  if(String(this) === ""){
    return "Error: empty string or incompatible data type.";
  }else{
    // Turn the given string into all lowercase first
    var entireStringToLower = this.toLowerCase();
    // Turn the new lowercased string into an array
    var stringIntoArray = entireStringToLower.split("");
    // Change the element in the [0] index into uppercase
    stringIntoArray[0] = stringIntoArray[0].toUpperCase();
    // Remove all the commas and converting the casting the array into a string
    return String(stringIntoArray).replace(/,/g, "");
  }
}

// Test-drive
console.log("".capitalize());
console.log("".reverseString().capitalize());
