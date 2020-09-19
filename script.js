console.log('This is a readme generator.  Please answer the following questions about your readme to have it generated.');
setTimeout(() => {
}, 2000);

var inquirer = require('inquirer');

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
            message: '',
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
            type: 'input',
            message: 'Please select an option from the list',
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
    });