var cryptoDecoder = function(string) {
  var splitWordArray = string.split(" ");
  var joinWord = splitWordArray.join("");

  var sevenCharacterWords = joinWord.match(/.{1,7}/g); //this is now an array of 7 characters

  return sevenCharacterWords;

  var splitWordNoSpace = joinWord.split("");
  var Apple = splitWordNoSpace;
  return Apple;




};
