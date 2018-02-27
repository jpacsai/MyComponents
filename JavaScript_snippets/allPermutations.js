// Recursion

function getAllPermutations(string) {
    var r = [];
    if (string.length === 1) {
      r.push(string);
      return r;
    }
    for (var i = 0; i < string.length; i++) {
      var firstChar = string[i];
      var charsLeft = string.substring(0, i) + string.substring(i + 1);
      var innerPermutations = getAllPermutations(charsLeft);
      for (var j = 0; j < innerPermutations.length; j++) {
        r.push(firstChar + innerPermutations[j]);
      }
    }
    return r;
}