let height = a.filter(f => f !== -1).sort((a,b) => a-b);
    for (let j = 0; j < a.length; j++) {
        if (a[j] !== -1) {
          var x = height.shift();
          a.splice(j,1,x);
        }
      
    }

let a = [-1, 150, 190, 170, -1, -1, 160, 180];