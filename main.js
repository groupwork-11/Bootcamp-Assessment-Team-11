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
else{console.log("You did not get enough questions correct");
}


console.log("\nYou are now starting Level 2: Film and TV!");
console.log("You need too answer at least 3 questions")

console.log("\nYou are now starting Level 3: Art!");
console.log("You need too answer at least 3 questions")

//LEVEL 4: GEOGRAPHY
console.log("\nYou are now starting Level 4: Geography!");
console.log("You need too answer at least 3 questions")

console.log("Question 1:")
console.log("What is the longest river in the world?");
console.log("1.Nile");
console.log("2.Rhine");
console.log("3.Mississippi");
console.log("4.Amazon");

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


console.log("Question 2:")
console.log("How many colored rings dooes the Olympic flag have?");
console.log("1.3");
console.log("2.4");
console.log("3.5");
console.log("4.6");

answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 3) {
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


console.log("Question 3:")
console.log("What is the capital city of Italy?");
console.log("1.Rome");
console.log("2.Milan");
console.log("3.Venice");
console.log("4.Naples");



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


console.log("Question 4:")
console.log("What is the largest country in the world?");
console.log("1.Canada");
console.log("2.china");
console.log("3.United States");
console.log("4.Russia");


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
else{console.log("You did not get enough questions correct");
}


console.log("Question 5:")
console.log("What is the capital city of canada?");
console.log("1.Vancouver");
console.log("2.Toronto");
console.log("3.Ottawa");
console.log("4.Montreal");



answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 3) {
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

console.log("\nYou are now starting Level 5: Business!");
console.log("You need too answer at least 3 questions")



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
