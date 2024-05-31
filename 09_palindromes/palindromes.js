const palindromes = function (string) {
    let countLow = 0;
    let countHigh = string.length-1;
    let bool = true
    let count = 0;

    while(bool === true && count< Math.floor(string.length/2)){
        if(string.charAt(countLow) == string.charAt(countHigh)){
            countHigh -= 1
            countLow += 1
            bool === true
        }
        else{
            return false
        }
        count += 1
    }
    return true
};; 

// Do not edit below this line
module.exports = palindromes;
