const prompt = require ("readline-sync");
const Highscore = 5 

console.log ("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Welcome to ThinkFast!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

console.log ("This is a quiz game where you will be asked 5 questions and you have to answer them as fast as possible.");
console.log("You will be scored based on your answers and the time taken to answer them. The faster you answer, the higher your score will be. Good luck!");

console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Let's Get Started!!!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n");

let name = prompt.question("Enter your preferred Username: ");

let correctanswer = 0;
let wronganswer = 0;
let levelcorrect = 0;
let score = 0;


console.log("\nWelcome " + name + "! Let's get started with the quiz :) \n");

let note = prompt.question("NOTE: You can't move on to the next level unless you answer three questions correctly, if not you will have to start over from the beginning. (Click Enter!!)\n");

let levels = ["Food and Drinks","Film and TV","Art","Geography","Business"]
console.log("Below are the list of levels.")
console.log("Level 1. " + levels[0]);
console.log("Level 2. " + levels[1]);
console.log("Level 3. " + levels[2]);
console.log("Level 4. " + levels[3]);
console.log("Level 5. " + levels[4]);

let selectedlevel = Number (prompt.question("\nWhich level would you like to play?: \n"));
while (selectedlevel < 1 || selectedlevel > 5) {
    console.log ("Invalid input. Please choose a level between 1 to 5\n");
    selectedlevel = Number (prompt.question("Which level would you like to play?: \n")); 
}

switch (selectedlevel) {
    case 1:
//level 1: Food and Drinks
console.log("\nYou are now starting Level 1: Food and Drinks!");
console.log("You need too answer at least 3 questions correctly to move onto the next level.\n ")

//---------------------------------------------1----------------------------------------------------
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
    score++;  
    levelcorrect++;  
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//---------------------------------------------2----------------------------------------------------
console.log("\nQuestion 2:")
console.log("Which beverage is made from roasted coffee beans?");
console.log("1.Tea");
console.log("2.Coffee");
console.log("3.Juice");
console.log("4.Water");

answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 2) {
    console.log("Correct!");
    correctanswer++; 
    score++; 
    levelcorrect++;  
}

else {
    console.log("Wrong!");
    wronganswer++;
}


//---------------------------------------------3----------------------------------------------------
console.log("\nQuestion 3:")
console.log("Where does Pizza originate from?");
console.log("1.Germany");
console.log("2.France");
console.log("3.Italy");
console.log("4.Canada");

answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 3) {
    console.log("Correct!");
    correctanswer++;
    score++;    
    levelcorrect++; 
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//---------------------------------------------4----------------------------------------------------
console.log("\nQuestion 4:")
console.log("Where does Cassava flakes originate from?");
console.log("1.Nigeria");
console.log("2.Ghana");
console.log("3.South Africa");
console.log("4.Cameroon");

answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 1) {
    console.log("Correct!");
    correctanswer++;   
    score++; 
    levelcorrect++; 
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//---------------------------------------------5----------------------------------------------------
console.log("\nQuestion 5:")
console.log("Which of the following is the most popular fast food chain?");
console.log("1.KFC");
console.log("2.McDonald's");
console.log("3.Burger King");
console.log("4.Taco Bell");

answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 2) {
    console.log("Correct!");
    correctanswer++; 
    score++;   
    levelcorrect++; 
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//AFTER QUESTION IS ANSWERED
console.log("\n You got "+ correctanswer + "questions correct!");

if (correctanswer >=3){
    console.log("Well Done! You have gotten 3 or more questions right!")
            ("Would you like to move onto the next level or End Game?\n.");
}
else{console.log("You did not get enough questions correct\n");
}

//AFTER LEVEL IS COMPLETED
if (correctanswer >=3){
    console.log("Well Done! You got at least 3 questions correct!\n.");
}
let choice = prompt.question("Do you want to end game or continue unto Next Level? (End Game/Next Level): ");
while (choice.toLowerCase() !== "end game" && choice.toLowerCase() !== "next level") {
    console.log("Invalid input. Please enter 'End Game' or 'Next Level'.");
    choice = prompt.question("Do you want to end game or continue unto Next Level? (End Game/Next Level): ");
}
if (choice.toLowerCase() === "end game") {
    console.log("\nGame Over. Well Done !");
    console.log ("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Quiz Summary!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("Username: " + name);
    console.log("Total Questions Answered: " + (correctanswer + wronganswer));
    console.log("Correct Answers: " + correctanswer);
    console.log("Wrong Answers: " + wronganswer);
    console.log("Score: " + score + " /5");
    process.exit(0);
}
else if (choice.toLowerCase() === "next level") {
    console.log("\nYou have chosen to continue to the next level. Good luck!");
}
else {
    console.log("Invalid input. Please enter 'End Game' or 'Next Level'.");
    console.log("You did not get enough questions correct");
    console.log("You need to get at least 3 questions correct to continue.");
    console.log("Game Over.\n");
}

break;

case 2:
//LEVEL 2: FILM AND TV
console.log("\nYou are now starting Level 2: Film and TV!");
console.log("You need too answer at least 3 questions")

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log("\nQuestion 1:")
console.log("In Stranger Things, What is Eleven's favortive snack?");
console.log("1.Pizza");
console.log("2.Waffles");
console.log("3.Ice Cream");
console.log("4.Pancakes");

answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 2) {
    console.log("Correct!");
    correctanswer++;   
    score++;
    levelcorrect++; 
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//--------------------------------------------2-----------------------------------------------
console.log("\nQuestion 2:")
console.log("In Lion King, What is the name of Simba's father?");
console.log("1.Rafiki");
console.log("2.Timon");
console.log("3.Mufasa");
console.log("4.Banzai");

answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 3) {
    console.log("Correct!");
    correctanswer++;   
    score++;
    levelcorrect++; 
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//----------------------------------------3--------------------------------------------------------
console.log("\nQuestion 3:")
console.log("In Wednesday, what is the name of Wednesday Addam's disembodied hand?");
console.log("1.Handley");
console.log("2.Shadow");
console.log("3.Fingers");
console.log("4.Thing");

answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 4) {
    console.log("Correct!");
    correctanswer++;   
    score++;
    levelcorrect++; 
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//-------------------------------------------4----------------------------------------------------------
console.log("\nQuestion 4:")
console.log("In the movie Frozen, what is the name of the snowman?");
console.log("1.Olaf");
console.log("2.Snowy");
console.log("3.Frosty");
console.log("4.Snowball");

answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 1) {
    console.log("Correct!");
    correctanswer++;   
    score++;
    levelcorrect++; 
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//---------------------------------------------5-------------------------------------------------
console.log("\nQuestion 5:")
console.log("In Moana, what is the name of the chicken?");
console.log("1.Tui");
console.log("2.Heihei");
console.log("3.Maui");
console.log("4.Pua");

answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 2) {
    console.log("Correct!");
    correctanswer++;   
    score++;
    levelcorrect++; 
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//AFTER QUESTION IS ANSWERED
console.log("\n You got "+ correctanswer + "questions correct!");

if (correctanswer >=3)  {console.log("Well Done! You have gotten 3 or more questions right!")
            ("Would you like to move onto the next level or End Game?\n.");
}
else {console.log("You did not get enough questions correct\n");
}

//AFTER LEVEL IS COMPLETED
choice = prompt.question("Do you want to end game or continue unto Next Level? (End Game/Next Level): ");
while (choice.toLowerCase() !== "end game" && choice.toLowerCase() !== "next level") {
    console.log("Invalid input. Please enter 'End Game' or 'Next Level'.");
    choice = prompt.question("Do you want to end game or continue unto Next Level? (End Game/Next Level): ");
}
if (choice.toLowerCase() === "end game") {
    console.log("\nGame Over. Well Done !");
    console.log ("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Quiz Summary!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("Username: " + name);
    console.log("Total Questions Answered: " + (correctanswer + wronganswer));
    console.log("Correct Answers: " + correctanswer);
    console.log("Wrong Answers: " + wronganswer);
    console.log("Score: " + score + " /5");
    process.exit(0);
}
else if (choice.toLowerCase() === "next level") {
    console.log("\nYou have chosen to continue to the next level. Good luck!");
}
else {
    console.log("Invalid input. Please enter 'End Game' or 'Next Level'.");
}

break;

case 3:
//LEVEL 3:ART
console.log("\nYou are now starting Level 3: Art!");
console.log("You need too answer at least 3 questions")

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~1~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
console.log("\nQuestion 1:")
console.log("Who painted the Mona Lisa?");
console.log("1.Vincent Van Gogh");
console.log("2.Leonardo Da Vinci");
console.log("3.Pablo Picasso");
console.log("4.Claude Monet");

answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 2) {
    console.log("Correct!");
    correctanswer++;  
    score++;  
    levelcorrect++; 
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//--------------------------------------------2-----------------------------------------------
console.log("\nQuestion 2:")
console.log("What are the three primary colours in traditional art");
console.log("1.Red,Blue and Yellow");
console.log("2.Green,Purple and Orange");
console.log("3.Red,Green and Blue;");
console.log("4.Blue,Pink and Yellow");

answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 1) {
    console.log("Correct!");
    correctanswer++;  
    score++; 
    levelcorrect++;  
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//----------------------------------------3--------------------------------------------------------
console.log("\nQuestion 3:")
console.log("What is a sculpture");
console.log("1.A type of painting");
console.log("2.A three-dimensional artwork");
console.log("3.A type of photography");
console.log("4.A drawing made with ink");

answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 2) {
    console.log("Correct!");
    correctanswer++;
    score++;    
    levelcorrect++; 
}

else {
    console.log("Wrong!");
    wronganswer++;
}
//-------------------------------------------4----------------------------------------------------------
console.log("\nQuestion 4:")
console.log("What material is commonly used for making sculptures");
console.log("1.Marble");
console.log("2.Charcoal");
console.log("3.Paper Clips");
console.log("4.Watercolour");


answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 1) {
    console.log("Correct!");
    correctanswer++;
    score++; 
    levelcorrect++;    
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//---------------------------------------------5-------------------------------------------------
console.log("\nQuestion 5:")
console.log("What is a landscape painting usually focused on");
console.log("1.People and portraits");
console.log("2.Buildings only");
console.log("3.Natural scenery and surroundings");
console.log("4.Abstract Shapes");


answer = Number(prompt.question("Enter your answer: "));
while (answer < 1 || answer > 4) {
    console.log("Please enter a number between 1 and 4.");
    answer= Number(prompt.question("Please enter your Answer:"));
}

if (answer == 3) {
    console.log("Correct!");
    correctanswer++; 
    score++;
    levelcorrect++;    
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//AFTER QUESTION IS ANSWERED
console.log("\n You got "+ correctanswer + "questions correct!");

if (correctanswer >=3){
     console.log("Well Done! You have gotten 3 or more questions right!")
            ("Would you like to move onto the next level or End Game?\n.");
}
else{console.log("You did not get enough questions correct\n");
}

//AFTER LEVEL IS COMPLETED
if (correctanswer >=3){
    console.log("Well Done! You got at least 3 questions correct!\n.");
}
choice = prompt.question("Do you want to end game or continue unto Next Level? (End Game/Next Level): ");
while (choice.toLowerCase() !== "end game" && choice.toLowerCase() !== "next level") {
    console.log("Invalid input. Please enter 'End Game' or 'Next Level'.");
    choice = prompt.question("Do you want to end game or continue unto Next Level? (End Game/Next Level): ");
}
if (choice.toLowerCase() === "end game") {
    console.log("\nGame Over. Well Done !");
    console.log ("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Quiz Summary!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("Username: " + name);
    console.log("Total Questions Answered: " + (correctanswer + wronganswer));
    console.log("Correct Answers: " + correctanswer);
    console.log("Wrong Answers: " + wronganswer);
    console.log("Score: " + score + " /5");
    process.exit(0);
}
else if (choice.toLowerCase() === "next level") {
    console.log("\nYou have chosen to continue to the next level. Good luck!");
}
else {
    console.log("Invalid input. Please enter 'End Game' or 'Next Level'.");
    console.log("You did not get enough questions correct");
    console.log("You need to get at least 3 questions correct to continue.");
    console.log("Game Over.\n");
}

break;

case 4:
//level 4: Geography
console.log("\nYou are now starting Level 4: Geography!");
console.log("You need too answer at least 3 questions")

//--------------------------------------------1----------------------------------------------------
console.log("\nQuestion 1:")
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
    score++;   
    levelcorrect++; 
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//------------------------------------------2------------------------------------------------------
console.log("\nQuestion 2:")
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
    score++;  
    levelcorrect++;   
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//--------------------------------------------3----------------------------------------------------
console.log("\nQuestion 3:")
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
    score++;   
    levelcorrect++; 
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//------------------------------------------------4------------------------------------------------
console.log("\nQuestion 4:")
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
    score++;  
    levelcorrect++;  
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//-----------------------------------------5-------------------------------------------------------
console.log("\nQuestion 5:")
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
    score++;  
    levelcorrect++;  
}

else {
    console.log("Wrong!");
    wronganswer++;
}


//AFTER QUESTION IS ANSWERED
console.log("\n You got "+ correctanswer + "questions correct!");

if (correctanswer >=3){
     console.log("Well Done! You have gotten 3 or more questions right!")
            ("Would you like to move onto the next level or End Game?\n.");
}
else{console.log("You did not get enough questions correct\n");
}

//AFTER LEVEL IS COMPLETED
choice = prompt.question("Do you want to end game or continue unto Next Level? (End Game/Next Level): ");
while (choice.toLowerCase() !== "end game" && choice.toLowerCase() !== "next level") {
    console.log("Invalid input. Please enter 'End Game' or 'Next Level'.");
    choice = prompt.question("Do you want to end game or continue unto Next Level? (End Game/Next Level): ");
}
if (choice.toLowerCase() === "end game") {
    console.log("\nGame Over. Well Done !");
    console.log ("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Quiz Summary!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("Username: " + name);
    console.log("Total Questions Answered: " + (correctanswer + wronganswer));
    console.log("Correct Answers: " + correctanswer);
    console.log("Wrong Answers: " + wronganswer);
    console.log("Score: " + score + " /5");
    process.exit(0);
}
else if (choice.toLowerCase() === "next level") {
    console.log("\nYou have chosen to continue to the next level. Good luck!");
}
else {
    console.log("Invalid input. Please enter 'End Game' or 'Next Level'.");
}

break;

case 5:
//level 5: Business
console.log("\nYou are now starting Level 5: Business!");
console.log("You need too answer at least 3 questions")

//--------------------------------------------1----------------------------------------------------
console.log("\nQuestion 1:")
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
    score++; 
    levelcorrect++;    
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//---------------------------------------------2---------------------------------------------------
console.log("\nQuestion 2:")
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
    score++; 
    levelcorrect++;  
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//---------------------------------------3---------------------------------------------------------
console.log("\nQuestion 3:")
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
    score++;  
    levelcorrect++; 
} 


else {
    console.log("Wrong!");
    wronganswer++;
}

//------------------------------------------------4------------------------------------------------
console.log("\nQuestion 4:")
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
    score++; 
    levelcorrect++;   
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//----------------------------------------------------5--------------------------------------------
console.log("\nQuestion 5:")
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
    score++;  
    levelcorrect++; 
}

else {
    console.log("Wrong!");
    wronganswer++;
}

//AFTER QUESTION IS ANSWERED
console.log("\n You got "+ correctanswer + "questions correct!");

if (correctanswer >=3){
     console.log("Well Done! You have gotten 3 or more questions right!")
            ("Would you like to move onto the next level or End Game?\n.");
}
else{console.log("You did not get enough questions correct\n");
}

//AFTER LEVEL IS COMPLETED
choice = prompt.question("Do you want to end game or continue unto Next Level? (End Game/Next Level): ");
while (choice.toLowerCase() !== "end game" && choice.toLowerCase() !== "next level") {
    console.log("Invalid input. Please enter 'End Game' or 'Next Level'.");
    choice = prompt.question("Do you want to end game or continue unto Next Level? (End Game/Next Level): ");
}
if (choice.toLowerCase() === "end game") {
    console.log("\nGame Over. Well Done !");
    console.log ("\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Quiz Summary!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
    console.log("Username: " + name);
    console.log("Total Questions Answered: " + (correctanswer + wronganswer));
    console.log("Correct Answers: " + correctanswer);
    console.log("Wrong Answers: " + wronganswer);
    console.log("Score: " + score + " /5");
    process.exit(0);
}
else if (choice.toLowerCase() === "next level") {
    console.log("\nYou have chosen to continue to the next level. Good luck!");
}
else {
    console.log("Invalid input. Please enter 'End Game' or 'Next Level'.");
}

break;
}


  



