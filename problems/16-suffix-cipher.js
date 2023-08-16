/*******************************************************************************
Write a function `suffixCipher` that accepts a sentence and object as arguments.
The object contains suffixes as keys and callbacks as values. The `suffixCipher`
function should return a new sentence where words of the original sentence are
modified according to the callback that corresponds with the suffix that the word
ends with. If the word does not end in any of the suffix keys, then it should not
be modified. You can assume that only one suffix of the object will match a word.

Examples:

let cipher1 = {
    ly: function(word) {
        return word.slice(0, -1) + 'ee';
    },
    ize: function(word) {
        return word + 'r';
    }
};
console.log(suffixCipher('quietly and gently visualize', cipher1));
// quietlee and gentlee visualizer

let cipher2 = {
    tal: function(word) {
        return word.toUpperCase();
    },
    s: function(word) {
        return word + 'th';
    }
};
console.log(suffixCipher('incremental progress is very instrumental', cipher2));
// INCREMENTAL progressth isth very INSTRUMENTAL
*******************************************************************************/

// function suffixCipher(sentence, cipher) {
//   let words = sentence.split(' ');
//   let result = [];
//   for (let i = 0; i < words.length; i++) {
//     let word = words[i];
//     let transformed = false;

//     for (let suffix in cipher) {
//       if (word.endsWith(suffix)) {
//         result.push(cipher[suffix](word));
//         transformed = true;
//         break;
//       }
//     }
//     if(!transformed) {
//       result.push(word);
//     }
//   }
//   return result.join(' ');
// }

function suffixCipher(sentence, cipher) {
  return sentence.split(' ').map(word => {

    for(let suffix in cipher) {
      if (word.endsWith(suffix)) {
        return cipher[suffix](word);
      }
    }
    return word;
  }).join(' ');

}
/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
try {
  module.exports = suffixCipher;
} catch (e) {
  return null;
}
