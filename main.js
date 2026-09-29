const prompt = require ("readline-sync");

console.log ("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Welcome to ThinkFast!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log ("This is a quiz game where you will be asked 5 questions and you have to answer them as fast as possible.");
console.log("You will be scored based on your answers and the time taken to answer them. The faster you answer, the higher your score will be. Good luck!");

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Let's Get Started!!!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

let name = prompt.question("Enter your preferred Username: ");

let correctanswer = 0;
let wronganswer = 0;

console.log("\nWelcome " + name + "! Let's get started with the quiz :) \n");

let note = prompt.question("NOTE: You can't move on to the next level unless you answer three questions correctly, if not you will have to start over from the beginning. (Click Enter!!)\n");

let levels = ["Food and Drinks","Film and TV","Art","Geography","Business"]
console.log("Below are the list of levels.")
console.log("Level 1. " + levels[0]);
console.log("Level 2. " + levels[1]);
console.log("Level 3. " + levels[2]);
console.log("Level 4. " + levels[3]);
console.log("Level 5. " + levels[4]);


console.log("\nYou are now starting Level 1: Food and Drinks!");
console.log("You need too answer at least 3 questions correctly to move onto the next level.\n ")
console.log("Question 1:")
console.log("Which fruit is known for having a yellow peel?");
console.log("1.Apple");
console.log("2.Banana");
console.log("3.Strawberry");
console.log("4.Orange");



let answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 2) {
    console.log("Correct!");
    correctanswer++;   
}

else {
    console.log("Wrong!");
    wronganswer++;
}


//AFTER QUESTION IS ANSWERED
console.log("\n You got "+ correctanswer + "questions correct!");

if (correctanswer >=3){
    console.log("Well Done! You are moving onto the next level.");
}
else{console.log("You did not get enough questions correct\n");
}


console.log("\nYou are now starting Level 2: Film and TV!");
console.log("You need too answer at least 3 questions")

console.log("\nYou are now starting Level 3: Art!");
console.log("You need too answer at least 3 questions")

console.log("\nYou are now starting Level 4: Geography!");
console.log("You need too answer at least 3 questions")

console.log("\nYou are now starting Level 5: Business!");
console.log("You need too answer at least 3 questions")


console.log("Question 1:")
console.log("what pricing strataegies associate higth price with luxury?");
console.log("1.Premium pricing");
console.log("2.Psychological pricing");
console.log("3.penetrataion Pricing");
console.log("4.Cost plus");



answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 1) {
    console.log("Correct!");
    correctanswer++;   
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//AFTER QUESTION IS ANSWERED
console.log("\n You got "+ correctanswer + "questions correct!");

if (correctanswer >=3){
    console.log("Well Done! You are moving onto the next level.");
}
else{console.log("You did not get enough questions correct\n");
}

console.log("Question 2:")
console.log("The aim of every business is to?");
console.log("1.To make profit");
console.log("2.Gain new customers");
console.log("3. Push competitors out of market");
console.log("4.To dominate");



answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 1) {
    console.log("Correct!");
    correctanswer++;   
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//AFTER QUESTION IS ANSWERED
console.log("\n You got "+ correctanswer + "questions correct!");

if (correctanswer >=3){
    console.log("Well Done! You are moving onto the next level.");
}
else{console.log("You did not get enough questions correct\n");
}

console.log("Question 3:")
console.log("Elements of market mix include allo expect from one?");
console.log("1.Product");
console.log("2.Price");
console.log("3.Place");
console.log("4.President");



answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 4) {
    console.log("Correct!");
    correctanswer++;   
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//AFTER QUESTION IS ANSWERED
console.log("\n You got "+ correctanswer + "questions correct!");

if (correctanswer >=3){
    console.log("Well Done! You are moving onto the next level.");
}
else{console.log("You did not get enough questions correct\n");
}

console.log("Question 4:")
console.log("The followico mmng iinclude external source of fianace except:");
console.log("1.Bank overdraft");
console.log("2.Bank loan");
console.log("3.Grant");
console.log("4.savings");



answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 4) {
    console.log("Correct!");
    correctanswer++;   
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//AFTER QUESTION IS ANSWERED
console.log("\n You got "+ correctanswer + "questions correct!");

if (correctanswer >=3){
    console.log("Well Done! You are moving onto the next level.\n");
}
else{console.log("You did not get enough questions correct\n");
}

console.log("Question 5:")
console.log("Two companies coming together is known as ?");
console.log("1.merger");
console.log("2.Bank loan");
console.log("3.Grant");
console.log("4.savings");



answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 1) {
    console.log("Correct!");
    correctanswer++;   
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//AFTER QUESTION IS ANSWERED
console.log("\n You got "+ correctanswer + "questions correct!");

if (correctanswer >=3){
    console.log("Well Done! You are moving onto the next level.");
}
else{console.log("You did not get enough questions correct");
}




switch (levels) {
    case 1:
        console.log("You have selected the levels: Food and Drinks."); 
        break;
    case 2:
        console.log("You have selected the levels: Film and TV.");
        break;
    case 3:
        console.log("You have selected the sub levels: Art.");
        break;
    case 4:
        console.log("You have selected the sub levels: Geography.");
        break;
    case 5:
        console.log("You have selected the sub levels: Business.");
        break;
    
}

let score = Number (prompt.question("Enter your score: "));
let highscore = 5;




console.log ("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Quiz Summary!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
