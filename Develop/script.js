var lowercaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];
var specialArr = ['!','#','$','%','&','(',')','*','+',',','-','.','@'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generatePassword function
function generatePassword() {
    var passLength = window.prompt("Please enter desired length:");
    // Check that length is a number
    if (isNaN(passLength)) {
        window.alert("Please enter a number.");
        return null;
    }
    // Check that length is between 8 and 128
    if (passLength<8 || passLength>128) {
        window.alert("Please enter a value between 8 and 128.");
        return null;
    }
    // Prompts for characters to be used
    var lowerChosen = window.confirm("Press 'OK' to include lowercase letters.");
    var upperChosen = window.confirm("Press 'OK' to include uppercase letters.");
    var numericChosen = window.confirm("Press 'OK' to include numbers.");
    var specialChosen = window.confirm("Press 'OK' to include special characters.");
    // Check that all prompts are not false
    if (lowerChosen===false && upperChosen===false && numericChosen===false && specialChosen===false) {
        window.alert("A character type must be selected.");
        return null;
    }
    // Arrays for building the password
    var combinedArr = [];
    var twoFromArr = [];
    var passArr = [];
    // If statements to select from the chosen arrays
    if(lowerChosen) {
        combinedArr = combinedArr.concat(lowercaseArr);
        for (var i=0; i<2; i++) {
            var rand = getRandom(lowercaseArr);
            twoFromArr.push(lowercaseArr[rand]);
        }
    }
    if(upperChosen) {
        combinedArr = combinedArr.concat(uppercaseArr);
        for (var i=0; i<2; i++) {
            var rand = getRandom(uppercaseArr);
            twoFromArr.push(uppercaseArr[rand]);
        }
    }
    if(numericChosen) {
        combinedArr = combinedArr.concat(numberArr);
        for (var i=0; i<2; i++) {
            var rand = getRandom(numberArr);
            twoFromArr.push(numberArr[rand]);
        }
    }
    if(specialChosen) {
        combinedArr = combinedArr.concat(specialArr);
        for (var i=0; i<2; i++) {
            var rand = getRandom(specialArr);
            twoFromArr.push(specialArr[rand]);
        }
    }
    // Building the password from the chosen arrays
    for (var i=0; i<passLength; i++) {
        var rand = Math.floor(Math.random()*2);
        if (rand=0) {
            var send = getRandom(twoFromArr);
            passArr.push(twoFromArr[send]);
        }
        else {
            var send = getRandom(combinedArr);
            passArr.push(combinedArr[send]);
        }
    }
    return passArr.join('');
}

// Function to choose a random number
function getRandom(arr) {
    var num = Math.floor(Math.random()*arr.length);
    return num;
}