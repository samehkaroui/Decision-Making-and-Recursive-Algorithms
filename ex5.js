function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Base case: if the string length is 0 or 1, it's a palindrome
    if (str.length <= 1) {
        return true;
    }

    // Check the first and last character
    if (str[0] !== str[str.length - 1]) {
        return false;
    }

    // Recursively check the remaining substring
    return isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("A man, a plan, a canal, Panama"));  // Output: true
console.log(isPalindrome("hello"));  // Output: false
