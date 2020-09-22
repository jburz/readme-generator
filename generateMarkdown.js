// function to generate markdown for README
function generateMarkdown(data) {
  const license = encodeURIComponent(data.license);
    return `# ${data.title}
## ${data.description}
## ${data.tableOfContents}
## ${data.installation}
## ${data.usage}
## ![License Badge](https://img.shields.io/badge/License-${license}-blue)
## ${data.contributing}
## ${data.tests}
## ${data.github}
  `;
}

module.exports = generateMarkdown
