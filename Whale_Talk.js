


// Phrase that will be translated
let input = `Hello, nice to meet you`






// Array of vowels
const vowels = [`a`, `e`, `i`, `o`, `u`];


















// will serve as a place to store the vowels from the input string
let resultArray = [];



/* for loop 1
    This for loop iterates throught the "input" string
 */
for (iteration = 0; iteration < input.length; iteration++) {


    
    /* for loop 2
        This for loop iterates throught the "vowel" string
    */
    for (vowel_Iteration = 0; vowel_Iteration < vowels.length; vowel_Iteration++) {
    



        /* 
            If a letter in the "input" string is e
            the letter e gets pushed to the "resultArray" string
        */
        if (input[iteration] == 'e') {

            resultArray.push(input[iteration]);

         /* 
            If a letter in the "input" string is u
            the letter u gets pushed to the "resultArray" string twice
        */
        } else if (input[iteration] == 'u') {
            
            resultArray.push(input[iteration]);
            resultArray.push(input[iteration]);
        }



    } // End of for loop 2



} // End of for loop 1




/*
    Prints "resultArray" as one string
    instead of having commas between each letter

    Also prints it completely uppercase
*/
console.log( resultArray.join(``).toUpperCase() );
