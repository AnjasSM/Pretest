function isPalindrome(sentence, phrase) {
  return sentence.includes(phrase)
}

let reverseString = (sentence) => {
    let newString = '';
    for(let i = sentence.length; i > 0; i--) {
        newString += sentence[i-1]
    }
    return newString;
}

function countPalindromesInString(sentence,phrase) {
    let subStrings = [];
    let length = sentence.length - phrase.length;
    for(let i = 0; i < length+1; i++) {
        let subString = sentence.substring(i,i + phrase.length);
        if(isPalindrome(subString,phrase)) {
            subStrings.push(subString);
          }
    }
    let reverse = reverseString(sentence)
    for(let i = 0; i < length + 1; i++) {
        
        let subString = reverse.substring(i,i + phrase.length);
        if(isPalindrome(subString,phrase)) {
            subStrings.push(subString);
          }
    }

  return subStrings.length;
}

const sentence = 'banananana'
const phrase = 'nana'

console.log(countPalindromesInString(sentence,phrase));
