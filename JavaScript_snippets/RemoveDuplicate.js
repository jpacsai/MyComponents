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


// REMOVE BOTH MULTIPLES //

var myArr = [1, 1, 2, 5, 5, 7, 8, 9, 9];

function removeDuplicates(arr) {
    var i, tmp;
    for(i=0; i<arr.length; i++) {
        tmp = arr.lastIndexOf(arr[i]);
        if(tmp === i) {
            //Only one of this number
        } else {
            //More than one
            arr.splice(tmp, 1);
            arr.splice(i, 1);
            i--;
        }
    }
}