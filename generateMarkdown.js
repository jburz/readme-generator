// function to generate markdown for README
function generateMarkdown(data) {
  const license = encodeURIComponent(data.license);
  return `# ${data.title}   ![License Badge](https://img.shields.io/badge/License-${license}-blue)
## Description  
${data.description}


## Table of Contents
  * [Description](#Description)
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Test](#Tests)
  * [Questions](#Questions)


## Installation
${data.installation}


## Usage
${data.usage}


## License
This application is covered under the [${data.license}](https://www.opensource.org/licenses) license.


## Contributing
${data.contributing}


## Tests
${data.tests}


## Questions
If you have any questions, feel free to find me on github [${data.github}](https://www.github.com/${data.github}) or send me an email at ${data.email}.
  `;
}

module.exports = generateMarkdown
