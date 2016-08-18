//business logic
function toPigLatin(sentence){
  var sentenceArray = sentence.split(" ");
  var pigArray = sentenceArray.map(convert);
  pigSentence = pigArray.join(" ");
  return pigSentence;
}

function convert(word){
  for(var i=0; i<word.length; i++) {
    // if ("yY".includes(word[1+i])){
    //   word = word.substr(1) + word.substr(0,1);
    // }
    if (!"AEIOUaeiou".includes(word[0])){
      if(((word.substr(0,1)==="q")||("Q"===word.substr(0,1)))&&((word.substr(1,1)==="u")||("U"===word.substr(1,1)))) {
        word = word.substr(2) + word.substr(0,2);
      } else {
        word = word.substr(1) + word.substr(0,1);
      }
    } else {
      word+="ay";
      return word;
    }
  }
}

// user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var sentence = $("#sentence").val();
    $("#translatedSentence").text(toPigLatin(sentence));
  });
});
//if("Yy".includes(word[1+i])){
