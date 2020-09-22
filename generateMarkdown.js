// function to generate markdown for README
function generateMarkdown(data) {
  const license = encodeURIComponent(data.license);
    return `# ${data.title}
## Description
${data.description}

## Table of Contens
${data.tableOfContents}

## Installation
${data.installation}

## Usage
${data.usage}

## License
![License Badge](https://img.shields.io/badge/License-${license}-blue)

## Contributing
${data.contributing}

## Tests
${data.tests}

## Github
${data.github}
  `;
}

module.exports = generateMarkdown
