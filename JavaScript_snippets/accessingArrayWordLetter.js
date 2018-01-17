function firstLast(x) {
    var first = '';
    var last = '';
    for (var i = 0; i < x.length; i++) {
      first += x[i][0];
      last += x[i][x[i].length - 1];
    }
    return first + ' is ' + last;
}