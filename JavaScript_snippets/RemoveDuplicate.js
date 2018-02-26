// Removes duplicates from array

function removeDuplicate(arr) {
    var i = arr.length;
    while (i--) {
      if (arr.indexOf(arr[i]) != i) {
        arr.splice(i,1);
      }
    }
    return arr;
  }
  
  arr.reduce(function(a,b){if(a.indexOf(b)<0)a.push(b);return a;},[]);


  removeDuplicate([2, 3, 3, 1, 5, 2]);  // [2, 3, 1, 5]