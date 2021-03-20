/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable linebreak-style */
/* eslint-disable no-template-curly-in-string */
/* eslint-disable linebreak-style */
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-alert
// eslint-disable-next-line no-unused-vars
const myString = prompt('Please Enter Your Sentence To Reverse:');
// eslint-disable-next-line no-unused-vars
function stringReverser(sentence) {
  return sentence.split('').reverse().join('');
}
// eslint-disable-next-line no-alert
alert(`Reversed version of this sentence is ${stringReverser(myString)}`);
