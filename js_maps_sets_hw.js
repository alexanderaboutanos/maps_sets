// Quick Question 1

// returns the array, minus the duplicates... {1,2,3,4}

// Quick Question 2

// the new set is an iteration of all the letters. but, some of the letters repeat, so remove duplicates. joining will bring them all together. final product = 'ref'

// Quick Question 3

// m = {[1,2,3] : true, [1,2,3] : false}

// HAS DUPLICATE //

const hasDuplicate = (arr) => (arr).length !== (new Set(arr)).size


// const hasDuplicate = (arr) => {
//     if (arr.length !== (new Set(arr)).size){
//         return true
//     }
//     else {
//         return false
//     }   
// }


// VOWEL COUNT //

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

// vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
// vowelCount('Colt') // Map { 'o' => 1 }

const vowelCount = (str) => {
    let newMap = new Map();
    const vowels = 'aeiou';
    let lwrStr = str.toLowerCase();
    let newArr = lwrStr.split('')
    for (let char of newArr){
        if (vowels.indexOf(char) !== -1){
            if (newMap.has(char)){
                newMap.set(char, newMap.get(char) + 1);
            }
            else {
                newMap.set(char, 1)
            }
        }
    }
    console.log(newMap)
}

// vowelCount('Alexander')