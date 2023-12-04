/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

// function calculateTime(n) {
//     return 0.01;
// }
function calculateTime(n) {
    // Record the start time
    const startTime = new Date().getTime();

    // Your actual code to calculate the sum from 1 to n goes here
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    // Record the end time
    const endTime = new Date().getTime();

    // Calculate the time difference in seconds
    const elapsedTimeInSeconds = (endTime - startTime) / 1000;

    return elapsedTimeInSeconds;
}

// Example usage:
console.log("Time taken for sum from 1 to 100:", calculateTime(100), "seconds");
console.log("Time taken for sum from 1 to 100000:", calculateTime(100000), "seconds");
console.log("Time taken for sum from 1 to 1000000000:", calculateTime(1000000000), "seconds");
