//WE use a regular expression method..    //it finds the occurence of any of the letters in the square brackets and has a global(g) modifier and case insensitive matching

const form = document.querySelector('form');
form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    let vowText = document.querySelector('#inpText');
    let vowTextInput = vowText.value;

    if (vowTextInput !== "") {
        console.log("You just typed the following: ", vowTextInput);

        vowelCounter(vowTextInput); //we call our function

        vowText.value = '';

    } else {
        document.querySelector('button').disable = 'true';
    }

})

function vowelCounter(str) {

    let result = str.match(/[aeiou]/gi);
    if (result !== null) {
        let count = result.length
        console.log(count);
        alert(`There are ${count} vowels \n The vowels are: ${result}`);
        return count;
    } else {
        console.log(0);
        alert(`There are ${0} vowels`);
    }

}

/* //ANOTHER METHOD
    //To Check for a particular letter in a string
    function vowelCounter(str, letter) {
        let count = 0;
        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) == letter)
                count += 1;
        }
        return count;
    }

    //Checks all the vowel letters (lower cased and upper cased) and adds their occurences and outputs the total
    let result0 = vowelCounter(vowTextInput, 'a');
    let result1 = vowelCounter(vowTextInput, 'A');
    let result2 = vowelCounter(vowTextInput, 'e');
    let result3 = vowelCounter(vowTextInput, 'E');
    let result4 = vowelCounter(vowTextInput, 'i');
    let result5 = vowelCounter(vowTextInput, 'I');
    let result6 = vowelCounter(vowTextInput, 'o');
    let result7 = vowelCounter(vowTextInput, 'O');
    let result8 = vowelCounter(vowTextInput, 'u');
    let result9 = vowelCounter(vowTextInput, 'U');

    let total = result0 + result1 + result2 + result3 + result4 + result5 + result6 + result7 + result8 + result9;
    console.log(total);
    alert(`There are ${total} Vowels`);
*/

/*  ANOTHER METHOD.. It's not manual by adding the occurrences of each vowel, rather it loops through all and stores the answer in a counter
     //Defining the Vowels (METHOD 2)
    // const vowels = ['a', 'e', 'i', 'o', 'u'];

// let solution = vowelCounter(vowTextInput);
        // console.log(solution);  // alert(`There are ${solution} vowels`);

    // function vowelCounter(str) {
    //     //initializing the counter
    //     let count = 0;
    //     //Convert all the vowels to lowercase, and loop through the string to test if the letter is a vowel
    //     for (let letter of str.toLowerCase()) {
    //         if (vowels.includes(letter)) {
    //             count += 1;
    //         }
    //     }
    //     //return number of vowels
    //     return count;
    // }

*/