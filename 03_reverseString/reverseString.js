const reverseString = function(string) {
    let emptyString =''
    for (let i = string.length -1; i>=0; i--){
        emptyString += string.charAt(i);
    }
    return emptyString
};

// Do not edit below this line
module.exports = reverseString;
