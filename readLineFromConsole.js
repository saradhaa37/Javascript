const readline = require('readline');

// Create an interface for reading input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question('Please enter a line of input: ', (input) => {
    // Use the input in your script
    console.log(`You entered: ${input}`);
    
    // Close the readline interface
    rl.close();
});
