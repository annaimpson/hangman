(function(){
'use strict';
  var letterButton = document.querySelector('.letter');
  var answerBox = document.querySelector('.answer-spaces');
  var underscore = "_";
  var displayBox = document.querySelector('.display');
  var selectWords = commonWords.filter(function(newWords){
    return newWords.length >= 3;
  });
  console.log(selectWords);

///////////////////////////////////////////////////////////////
///////////////////////////pick random words///////////////////
//////////////////////////////////////////////////////////////
function randomWords(){
  var singleWord = selectWords[Math.floor(Math.random() * selectWords.length - 1)];
  var wordRandom = singleWord.split("");
  console.log(wordRandom);
  console.log(singleWord);
  for (var i=0; i < singleWord.length; i++){
    answerBox.textContent += underscore + " ";
  }
}
randomWords();
//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////


function displayLetter(e){
  display_words.textContent += e.target.id;
  console.log(displayBox);
}



letterButton.addEventListener('click', displayLetter);

}());
