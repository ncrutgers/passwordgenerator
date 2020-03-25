// Assignment Code
var generateBtn = document.querySelector("#generate");

// Values from each criteria assigned to a variable
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbs = "0123456789"; 
var splchars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Function generates and returns password
function generatePassword(){
  
  //prompt users for input length and store value
   var userLength = prompt("Choose length of characters between 8 and 128.");
   
  
   //If value is in bound continue
  if((userLength >= 8) && (userLength <= 128)){
      //prompt users for true and false input
      var lwCase = confirm("Choose lower case? \nSelect Ok for yes or Cancel for no.");
      var upCase = confirm("Choose upper case? \nSelect Ok for yes or Cancel for no.");
      var numbers = confirm("Choose numbers? \nSelect Ok for yes or Cancel for no.");
      var spcharacters = confirm("Choose special characters? \nSelect Ok for yes or Cancel for no.");
      
      var countCriteriaArray = [lwCase, upCase, numbers, spcharacters];
      // Count all true values
      var count = countCriteriaArray.filter(Boolean).length;
      
      //If at least one input is true continue 
      if(count >= 1){

        alert("Thank you! You have selected at least one criteria.");
        
        // Set variables for for loop
        
        var randomUpper = "";
        var randomLower = "";
        var randomNumbs = "";
        var randomSplchars = "";
        var randomPassString = "";
        
        
       // Retrieve random number for each criteria selected 
       for (var i = 0; i < userLength; i=i+count){
        
        if(lwCase === true){
          randomLower = lower[Math.floor(Math.random() * lower.length)];       
        }

        if(upCase === true){
          randomUpper = upper[Math.floor(Math.random() * upper.length)];           
        }        
          
        if(numbers === true){
          randomNumbs = numbs[Math.floor(Math.random() * numbs.length)];          
        }
        if(spcharacters === true){  
          randomSplchars = splchars[Math.floor(Math.random() * splchars.length)];          
        }
           
          randomPassString = randomPassString + randomLower + randomUpper + randomNumbs + randomSplchars; 
          var randomPass = randomPassString.substring(0, userLength);
                 
        }

      // If no input is true don't proceed, get alert, & return empty string
      } else {
        alert("At least one criteria must be selected: lowercase, uppercase, numbers, or special characters.");
        return "";
      }
  // If value is out of bounds don't proceed, get alert, & return empty string
  } else {
      alert("Password length must be between 8 and 128 inclusive.");
      return "";
  }

  return randomPass;
} 
  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
