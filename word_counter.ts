#! usr/bin/env/ node

// This is the CLI word counter app

import inquirer from "inquirer"

// Declear a constant 'answer' and assign it to result of inquirer.prompt function.

const answer:{
    Sentence:string
} = await inquirer.prompt(
    [
        {
            name:"Sentence",
            type: "input",
            message: "Enter your sentence to count the word"
        }
    ]
)

const words = answer.Sentence.trim().split(" ")

// Print the array of words to the console

console.log(words);

// Print the word of the sentence to the console
console.log(`Your sentence word count is ${words.length}`);
