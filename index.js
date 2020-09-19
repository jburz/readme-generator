const inquirer = require('inquirer');

console.log('This is a readme generator.  Please answer the following questions about your readme to have it generated.');


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
            type: 'list',
            message: 'What open source license would you like to use?',
            choices: [
                'Apache License 2.0',
                'BSD 2-clause (FreeBSD License)',
                'BSD 3-clause (Revised License)',
                'Common Development and Distribution License',
                'Ecplise Public Lincense 2.0',
                'GPL (GNU General Public License)',
                'LGPL (Lesser GNU General Public License)',
                'MIT License',
                'MPL (Mozilla Public License 2.0)'
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
    });