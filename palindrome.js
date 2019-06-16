function isPalindrome(word, prase) {
  return word.includes(prase)
}

let reverseString = (word) => {
    let newString = '';
    for(let i = word.length; i > 0; i--) {
        newString += word[i-1]
    }
    return newString;
}

function countPalindromesInString(word,prase) {
    let subStrings = [];
    let length = word.length - prase.length;
    for(let i = 0; i < length+1; i++) {
        let subString = word.substring(i,i + prase.length);
        if(isPalindrome(subString,prase)) {
            subStrings.push(subString);
          }
    }
    let reverse = reverseString(word)
    for(let i = 0; i < length + 1; i++) {
        
        let subString = reverse.substring(i,i + prase.length);
        if(isPalindrome(subString,prase)) {
            subStrings.push(subString);
          }
    }

  return subStrings.length;
}


const word = 'banananana'
const prase = 'nana'

console.log(countPalindromesInString(word,prase));
