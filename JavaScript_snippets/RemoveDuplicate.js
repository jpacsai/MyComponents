// Removes duplicates from array

function removeDuplicate(a) {
    var i = a.length;
    while (i--) {
      if (a.indexOf(a[i]) != i) {
        a.splice(i,1);
      }
    }
    return a;
  }
  
  
  removeDuplicate([2, 3, 3, 1, 5, 2]);  // [2, 3, 1, 5]