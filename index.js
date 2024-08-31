// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?', //0
    'What is the description of your project?', //1
    'What are the details you want to incldue in the table of contents?', //2
    'What are the installation instructions for your project?', //3
    'What is the usage information for your project?', //4
    'What are the contribution guidelines for your project?', //5
    'What are the test instructions for your project?', //6
    'What license are you using?', //7
    'What is your GitHub username?', //8
    'What is your email address?'//9
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('File created!');
        }
    });

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: questions[0], 
                message: 'title'
            },
            {
                type: 'input',
                name: questions[1],
                message: 'project description'
            },
            {
                type: 'input',
                name: questions[2],
                message: 'table of contents'
            },
            {
                type: 'input',
                name: questions[3],
                message: 'installation instructions'
            },
            {
                type: 'input',
                name: questions[4],
                message: 'usage information'
            },
            {
                type: 'input',
                name: questions[5],
                message: 'contributors'
            },
            {
                type: 'input',
                name: questions[6],
                message: 'test instructions'
            },
            {
                type: 'list',
                name: questions[7],
                message: 'what license are you using?',
                choices: ['MIT', 'GNU', 'Apache', 'ISC', 'None']
            },
            {
                type: 'input',
                name: questions[8],
                message: 'github username'
            },
            {
                type: 'input',
                name: questions[9],
                message: 'email'
            }
        ])
        .then((input) => {
            writeToFile('README.md', generateMarkdown(input));
        });
}

// Function call to initialize app
init(
);
