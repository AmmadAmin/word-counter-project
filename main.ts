#! /usr/bin/env node

//importing inquirer and chalk
import inquirer from 'inquirer';
import chalk from 'chalk';

// Diaplay a colourfull welcome message including the use of chalk
console.log(chalk.green("\n \t\t Welcome to the ammad - word counter"));
console.log("=".repeat(60));

 //prompt the user to enter a sentence
 let answer = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter a sentence: "
    }
 ]);

 // triming the sentence and split it into words based on "spaces"
 let words = answer.sentence.trim().split(" ");

 //display the number of words in the sentence
 console.log("=".repeat(60));
 console.log(chalk.bold("- Sentence Words:"));
 console.log(words);
 console.log(chalk.yellow(`\n The number of words in the sentence is: ${chalk.bold.red(words.length)}`));
 console.log("=".repeat(60));
 
 

 
 