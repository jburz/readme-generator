const inquirer = require('inquirer');
const fs = require('fs');
const gm = require('./generateMarkdown.js');
// const generateMarkdown = require('./generateMarkdown');

console.log('This is a readme generator.  Please answer the following questions about your readme to have it generated.');
console.log(inquirer);

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please write a brief description of what your project accomplishes:',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What would you like for table of contents?',
            name: 'tableOfContents'
        },
        {
            type: 'input',
            message: 'Please write a brief description of how the user should install your app',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'How should the app be used?',
            name: 'usage'
        },
        //Need to figure out options for different licensing
        {
            type: 'list',
            message: 'What open source license would you like to use?',
            choices: [
                'Apache 2.0',
                'BSD 2 Clause',
                'BSD 3 Clause',
                'CDDL 1.0',
                'EPL 2.0',
                'GPL 3.0',
                'LGPL 3.0',
                'MIT',
                'MPL 2.0'
            ],
            name: 'license'
        },
        {
            type: 'input',
            message: 'How can someone help contribute to the project?',
            name: 'contributing'
        },
        {
            type: 'input',
            message: 'What sort of test instructions would you like to include?',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'Enter your github username to link you github profile to the project: ',
            name: 'github'
        },
    ])
    .then(function (response) {
        console.log(response);
        writeToFile('readme.md', gm(response));
    });
    
// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, (data), function(err) {
        if (err) {
            throw err;
        };
    })
}


// // function to initialize program
// function init() {
//     const answers = gm({
//         title: 'testing'
//     });
// }

// // function call to initialize program
// init();