let alphabet = new Array();

function isPangram(sentence) {

  alphabet = ["abcdefghijklmnopqrstuvwxyz"];
  let lowerCasedSentence = sentence.toLowerCase()

  for (let char of alphabet) {
    if (lowerCasedSentence.indexOf(char) == -1) {
      return false;
    }
  }
  return true;
}

let ans = isPangram("abcdefghijklmnopqrstuvwXyz");
console.log(ans);
