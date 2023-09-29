const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = tutorials.map(tutorial =>) 

let sentence ='what is JSONP?';

function titleCased(){

  return tutorials.map( function (tutorial){
    return tutorial.split(" ").map(function (word){
      return word.charAt(0).toUpperCase()+ word.slice(1);
    }).join(" ")  
  })
   
  }


console.log(toTitleCase());




// breakSentence(sentence);
// console.log((sentence.split("")).charAt(0).toUpperCase()+ word.substr(1).toLowerCase());



// function capitalizeWord(word){
//   return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
// }

// function breakSentenceAndCapitalize(str){
//   return str.split(" ").map(function (word){
//     return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
//   });

// }

// console.log(breakSentenceAndCapitalize("ths is a sentence"))

// console.log(capitalizeWord("sherry"))

// breakSentence(sentence);

