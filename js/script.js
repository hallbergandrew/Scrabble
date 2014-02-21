var wordScore = function(word) {
  var letterArr = word.split("");
  var total = 0
  for (var i=0; i<letterArr.length; i++) {
    total += letterScore(letterArr[i]);
  } 
  return total;
}

var letterScore = function(letter) {
  var letter = letter.toUpperCase();
  var score1Letters = ["A","E","I","O","U","L","N","R","S","T"];
  var score2Letters = ["D", "G"];
  var score3Letters = ["B","C","M","P"];
  var score4Letters = ["F", "H", "V", "W", "Y"];
  var score5Letters = ["K"];
  var score8Letters = ["J","X"];
  var score10Letters = ["Q","Z"];

  if (score1Letters.indexOf(letter) >=0) {
    return 1;
  } else if (score2Letters.indexOf(letter) >=0){
    return 2; 
  } else if (score3Letters.indexOf(letter) >=0) {
    return 3;
  } else if (score4Letters.indexOf(letter) >=0) {
    return 4;
  } else if (score5Letters.indexOf(letter) >=0) {
    return 5;
  } else if (score8Letters.indexOf(letter) >=0) {
    return 8;
  } else if (score10Letters.indexOf(letter) >=0) {
    return 10;
  }

  //Before Refactoring with .idexOf
  // for (var i = 0; i < score1Letters.length; i++) {
  //   if (letter === score1Letters[i]) {
  //     scoreLetter = 1;
  //   }else if (letter === score2Letters[i]) {
  //     scoreLetter = 2;
  //   }else if (letter === score3Letters[i]) {
  //     scoreLetter = 3;
  //   }else if (letter === score4Letters[i]) {
  //     scoreLetter = 4;
  //   }else if (letter === score5Letters[i]) {
  //     scoreLetter = 5;
  //   }else if (letter === score8Letters[i]) {
  //     scoreLetter = 8;
  //   }else if (letter === score10Letters[i]) {
  //     scoreLetter = 10;  
  //   }
  // };    


};
