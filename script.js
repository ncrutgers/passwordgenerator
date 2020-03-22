// Assignment Code
var generateBtn = document.querySelector("#generate");//given

// Values from each criteria assigned to a variable
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numbs = "0123456789"; 
var splchars = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Function generates and returns password
function generatePassword(){
  
  //prompt users for input length and store value
   var userLength = prompt("Choose length of characters between 8 and 128");
  
   //If value is in bound continue
  if((userLength >= 8) && (userLength <= 128)){
      //prompt users for true and false input
      var lwCase = confirm("Choose lower case? \nSelect Ok for yes or Cancel for no");
      var upCase = confirm("Choose upper case? \nSelect Ok for yes or Cancel for no");
      var numbers = confirm("Choose numbers? \nSelect Ok for yes or Cancel for no");
      var spcharacters = confirm("Choose special characters? \nSelect Ok for yes or Cancel for no");
      
      //If at least one input is true continue 
      if (lwCase || upCase || numbers || spcharacters){
        alert("You have selected at least one criteria");
        //Get all true values???????
        
        //Loop length amount of time
        //For each true input => proceed to calculate a random value and save value
        for (var i = 0; i < userLength; i++){
          var randomUpper = randomUpper + (upper[Math.floor(Math.random() * upper.length)]);
          var randomLower = randomLower + lower[Math.floor(Math.random() * lower.length)];
          var randomNumbs = randomNumbs + numbs[Math.floor(Math.random() * numbs.length)];
          var randomSplchars = randomSplchars + splchars[Math.floor(Math.random() * splchars.length)];
           
          var randomPass = randomUpper + randomLower + randomNumbs + randomSplchars;

          console.log(randomUpper);         
        }

      // If no input is true don't proceed & get alert
      } else {
        alert("At least one criteria must be selected: Lowercase, Uppercase, numbers, or special characters");
      }
  // If value is out of bounds don't proceed & get alert
  } else {
      alert("Password length must be between 8 and 128 inclusive.");
  }
    
  return randomPass;
}



// Write password to the #password input
function writePassword() { //given
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);//given
