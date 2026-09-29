const prompt = require ("readline-sync");

console.log ("~~~~~~~~~~~~~~~~~Welcome to ThinkFast!~~~~~~~~~~~~~~~~~");

let name = prompt.question("Enter your preferred Username: ");
let score = Number (prompt.question("Enter your score: "));
let highscore = 5;
let correctanswer = 0;
let wronganswer = 0;