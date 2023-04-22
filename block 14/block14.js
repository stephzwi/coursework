// index       0  1  2  3  4   5   6   7
//const input = [2, 4, 6, 8, 11, 20, 15, 22] 
//const result = []

// loop over each element 
//for (let i = 0; i < input.length; i++) {
 
   // evaluate each element => is this odd?
//   if (input[i] % 2 === 1) {
   // once you have the odd element, add it to your answer  
//    result.push(input[i])
//   } else {
     // if it's even, don't even worry about it. 
//   }
//};
//console.log("hi 17")

//With a for loop, create a JavaScript code that creates a new array in reverse order.

//const glue = [1, 2, 3]
//const paper = []

// loop over each element
//for (let i = glue.length - 1; i >= 0; i--) {
    
    // input should come out in reverse order
//    paper.push(glue[i])

//}
//console.log('paper is now reverse', paper)



//FizzBuzz
//Create a JavaScript code that prints each number from 1 to 100 on a new line.

//For each multiple of 3, print "Fizz" instead of the number.

//For each multiple of 5, print "Buzz" instead of the number.

//For numbers that are multiples of both 3 and 5, print "FizzBuzz" instead of the number.





for (let i = 1; i <= 100; i++) 
{
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz")
    }
    else if (i % 5 === 0) {
        console.log("buzz")
    }
    else if (i % 3 === 0) {
        console.log("fizz")
    }       
    else { 
        console.log (i)
    } 
}
 






//let input = "ukelele";
//let consonants = [];
//let vowels = [];
// if you want to use a for...of loop
// for (let letter of input) {
//     if (["a", "e", "i", "o", "u"].includes(letter)) {
//         vowels.push(letter);
//     } else {
//         consonants.push(letter);
//     }
// }
//for (let i = 0; i < input.length; i++) {
//    if (["a", "e", "i", "o", "u"].includes(input[i])) {
//        vowels.push(input[i]);
//    } else {
//        consonants.push(input[i]);
//    }
//}
//console.log(${input} has ${consonants.length} consonants and ${vowels.length} vowels)
