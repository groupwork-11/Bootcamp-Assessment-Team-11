const prompt = require ("readline-sync");

console.log ("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Welcome to ThinkFast!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log ("This is a quiz game where you will be asked 5 questions and you have to answer them as fast as possible.");
console.log("You will be scored based on your answers and the time taken to answer them. The faster you answer, the higher your score will be. Good luck!");

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Let's Get Started!!!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

let name = prompt.question("Enter your preferred Username: ");

console.log("\nWelcome " + name + "! Let's get started with the quiz :) \n");

console.log("NOTE: You can't move on to the next level unless you answer three questions correctly, if not you will have to start over from the beginning.\n");

console.log("Below are the list of levels.");

let levels = ["Food and Drinks","Film and TV","Art"]

console.log



switch (levels) {
    case 1:
        console.log("You have selected the category: Food and Drinks."); 
        break;
    case 2:
        console.log("You have selected the category: Film and TV.");
        break;
    case 3:
        console.log("You have selected the sub category: Art.");
    case 4:
        console.log("You have selected the sub category: Geography.");
    case 5:
        console.log("You have selected the sub category: Business.");
        break;
    
}

let score = Number (prompt.question("Enter your score: "));
let highscore = 5;
let correctanswer = 0;
let wronganswer = 0;



console.log ("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Quiz Summery!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
