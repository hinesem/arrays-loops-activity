/**
 * #1 Hobbies
 * ----------
 * 1. Create an array of group member hobbies
 * 2. Write a loop that logs out each hobby
 * 3. After the loop, log out the total number of
 *    hobbies
 */
let count = 0;
let hobbyArray = ['fishing', 'disc golf', 'hiking', 'eating'];
for (hobby of hobbyArray) {
    console.log(hobby);
    count +=1;
}
console.log(`The total number of hobbies is: ${count}`);

// Example output
// 1. swimming
// 2. board games
// 3. painting
// Total hobbies: 3

/**
 * #2 Colors
 * ---------
 * 1. Create an array of colors as strings
 *    (include the color 'teal' at least once)
 * 2. Create a variable tealCount
 * 3. Write a loop that counts the number of times teal 
 *    is in the array
 * 4. Output the array and number of times teal was found
 */


// Example output
// green, red, teal, orange, teal
// Teal was found 2 times
let colors = ['red', 'white', 'blue', 'black', 'grey', 'teal'];
let tealCount = 0;

for(i of colors) {
    if (i === 'teal') {
    tealCount ++;
    }
} 
console.log(colors);
console.log(`Teal was found ${tealCount} times`);

/**
 * #3 Even & Odd
 * -------------
 * 1. Create an array of numbers (at least 5 numbers)
 * 2. Create variables oddNumbers and evenNumbers (empty arrays)
 * 3. Write a loop that puts all the odd numbers in the oddNumbers 
 *    array and even numbers in the evenNumbers array.
 * 4. Output the original array, odd number array and even number array
 */


// Example output
// 3, 7, 2, 8, 11, 4, 2
// Odd 3, 7, 11
// Even 2, 8, 4, 2

let numArray = [3, 10, 7, 25, 4, 13];
let oddNumbers = [];
let evenNumbers = [];



for (let i = 0; i < numArray.length; i++) {
    if(numArray[i] %2 === 0) {
        evenNumbers.push(numArray[i]);
    }else{
        oddNumbers.push(numArray[i]);
    }
}


console.log(`Odd: ${oddNumbers}`);
console.log(`Even: ${evenNumbers}`);
console.log('test');
/**
 * #4 Flipping Switches
 * --------------------
 * 1. Create an array of boolean values (some true and some false)
 * 2. Create a variable toggled (empty array)
 * 3. Write a loop that adds the opposite value to the toggled array
 * 4. Output both arrays
 */

let TorF = [true, false, true, false];
let toggled = [];

for (let i = 0; i < TorF.length; i++) {
    if(TorF[i] === true) {
        toggled.push(false);
    } else {
        toggled.push(true);
    }
}
console.log(toggled);
// Example output
// true, false, true, true
// Toggled false, true, false, false


/**
 * #5 Remove 0's
 * --------------------
 * 1. Create an array of numbers which has one or more 0's
 *    at the end (e.g. 3, 0, 2, 8, 0, 0, 0)
 * 2. Write a loop that removes 0 from the end of the array
 *    NOTE: You should not need a second array here.
 * 3. Output the array
 */


// Example output
// Before loop 3, 0, 2, 8, 0, 0, 0
// After loop 3, 0, 2, 8

let nums = [3, 2, 1, 0, 5, 9, 0, 0, 0];

for (let i = nums.length - 1; i >= 0; i--) {
    console.log(nums[i], i);
    if (nums[i] === 0) {
        console.log(`in 'if' block`);
        nums.pop();
    } 
    else {
        console.log(`in 'else' block`)
        break;
    }
}

// didn't catch Andreas' explanation
let someNumbers = [];
let maxDistance = 0;
for (let i = 0; i < someNumbers)

const list = document.getElementById("hobby-list");
list.innerHTML += `<li>This is the first item in my list</li>`;
list.innerHTML += `<li>This is the second item in my list</li>`;
const header = document.getElementById("heading-one");
header.innerHTML = `This is the new header`;
