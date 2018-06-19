/*
Your rocket has arrived safely back to your home on Earth's moon, and you've already received a letter from one of your Martian pen pals! You're excited to read what it says but the text is encrypted, so you'll need to figure out the secret cipher (a number that can be used to decode the message).

To help you find the secret cipher, your pen pal enclosed some hints:

The number has numberLength digits (with no leading zeroes)
The digits of the number add up to sumOfDigits
It's the kth-largest number with this property (0-based)
If there are less than k of these numbers, just keep repeating the sequence
Follow your pen pal's clues to find the secret cipher!

Note: there's a chance that your pen pal made a mistake in their haste to send out the message, so it might not be possible to find a number that's consistent with the clues. In this case, return -1.

Example

For numberLength = 3, sumOfDigits = 4, and k = 7, the output should be secretNumber(numberLength, sumOfDigits, k) = 301.

There are nine 3-digit numbers whose digits add up to 4:
103, 112, 121, 130, 202, 211, 220, 301, 310, and 400;
so the 7th (0-based) number would be 301.

For numberLength = 5, sumOfDigits = 2, and k = 8, the output should be secretNumber(numberLength, sumOfDigits, k) = 11000.

There are only five 5-digit numbers whose digits add up to 2, so we'll keep repeating the sequence until we have enough numbers:
10001, 10010, 10100, 11000, 20000, 10001, 10010, 10100, 11000;
so the 8th (0-based) number is 11000.

For numberLength = 4, sumOfDigits = 100, and k = 3, the output should be secretNumber(numberLength, sumOfDigits, k) = -1.

It's not possible for a 4-digit number to have digits that sum to 100, so we return -1

*/

/*
 *  //Using recursive to find every digits of the number
    //Each time we consider 
    // + how many digits we have to continue finding 
    // + What is the sum of those digits
    // => Is it possible to continue constructing
    // * It would be impossible if the sum of those digits:
    //   - Negative
    //   - Greater than 9 * (the number of remaining digits) (each digit can't exeed 9)
function idea(numberLength, sumOfDigits, k) {
    //Store all valid values
    let all = []
    
    const generate = (level, sum, number, begin) => {
        //Stop finding if it's impossible to construct the number
        if(sum < 0 || sum > level * 9) return 
        
        if(!level) {
            if(!sum) all.push(number)
            return
        }
        for(let digit = begin;digit < 10;digit++) {
            generate(level - 1, sum - digit, number * 10 + digit, 0)
        }
    }
    //Initially past the first digit of the number starts with 1
    generate(numberLength, sumOfDigits, 0, 1)
  
    return all[k % all.length] || -1
}
*/

a = []

secretNumber = (l, S, k) => 
    (g =(i, s, n, b) => {
        if(!i | s < 0 | s > i * 9) s || a.push(n)
        else 
        while(b < 10) g(i - 1, s - b, n * 10 + b++, 0)
        
        
    })(l, S, 0, 1) || a[k % a.length] || -1


