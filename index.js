const fs = require("fs");
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('please enter your project title');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Describe your project',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('please enter a description');
                    return false;
                }
            }
        },
        {
            type: 'editor',
            name: 'installation',
            message: 'what is the installation process?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please input the installation process');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'how will this app be used?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please input usage description');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license will you be using?',
            choices: ['MIT', 'Apache license 2.0', 'Mozilla Public license 2.0', 'microsoft Public License'],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please choose a license');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter contribution guidelines',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please input contribution guidelines');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'testing',
            message: 'Please enter any test instructions here',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Please enter how you can be contacted for any questions here',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter contact details');
                    return false;
                }
            }
        }
    ])
};


// function to write README file
// function writeToFile(fileName, data) {
// }
const writeFile = data => {
    fs.writeFile('README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log('Success! Your README has been created')
        }
    })
};

// function to initialize program
// function init() {

// }
questions()
    .then(answers => {
        return generateMarkdown(answers);
    })

    .then(data => {
        return writeFile(data);
    })

    .catch(err => {
        console.log(err)
    })

