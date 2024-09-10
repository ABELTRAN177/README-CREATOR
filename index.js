// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?', //0
    'What is the description of your project?', //1
    'What are the details you want to include in the table of contents?', //2
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
// gave the user the option to include or exclude certain sections based on their project needs
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title', 
                message: questions[0]
            },
            {
                type: 'input',
                name: 'description',
                message: questions[1]
            },
            // did not end up using this question
            // {
            //     type: 'input',
            //     name: 'contents',
            //     message: questions[2]
            // },
            {
                type: 'confirm',
                name: 'confirmInstall',
                message: 'Do you want to include installation instructions?',
            },
            {
                type: 'input',
                name: 'installation',
                message: questions[3],
                when: ({ confirmInstall }) => confirmInstall
            },
            {
                type: 'confirm',
                name: 'confirmUsage',
                message: 'Do you want to include usage information?',
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[4],
                when: ({ confirmUsage }) => confirmUsage
            },
            {
                type: 'input',
                name: 'contributors',
                message: questions[5]
            },
            {
                type: 'confirm',
                name: 'confirmTest',
                message: 'Do you want to include testing information?',
            },
            {
                type: 'input',
                name: 'test',
                message: questions[6],
                when: ({ confirmTest }) => confirmTest
            },
            {
                type: 'list',
                name: 'license',
                message: questions[7],
                choices: ['MIT', 'GNU', 'Apache', 'ISC', 'None']
            },
            {
                type: 'input',
                name: 'github',
                message: questions[8]
            },
            {
                type: 'input',
                name: 'email',
                message: questions[9]
            }
        ])

                .then((input) => {
                    writeToFile('README.md', generateMarkdown(input));
                });
        } 

// Function call to initialize app
init(
);
