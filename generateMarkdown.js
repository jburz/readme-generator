// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
## ${data.description}
## ${data.tableOfContents}
## ${data.installation}
## ${data.usage}
## ![License Badge](https://img.shields.io/badge/License-${data.license}-blue)
## ${data.contributing}
## ${data.tests}
## ${data.github}
  `;
}

module.exports = generateMarkdown
