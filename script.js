// complete the given function

function palindrome(string){
	 // convert string to an array
    const arrayValues = string.split('');

    // reverse the array values
    const reverseArrayValues = arrayValues.reverse();

    // convert array to string
    const reverseString = reverseArrayValues.join('');

    if(string == reverseString) {
        return true;
    }
    else {
        return false;
    }
}
module.exports = palindrome
