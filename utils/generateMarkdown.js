// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT"){
    return "[![MIT](https://img.shields.io/badge/license-MIT-blue)](https://opensource.org/licenses/MIT)"
  }if(license === "Apache 2.0"){
    return "[![Apache 2.0](https://img.shields.io/badge/license-Apache-blue)](https://opensource.org/licenses/Apache-2.0)"
  }if(license === "Frameworx"){
    return "[![Frameworx](https://img.shields.io/badge/license-Frameworx-blue)](https://opensource.org/licenses/Frameworx-1.0)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === "MIT"){
    return "[MIT](https://opensource.org/licenses/MIT)"
  }if(license === "Apache 2.0"){
    return "[Apache 2.0](https://opensource.org/licenses/Apache-2.0)"
  }if(license === "Frameworx"){
    return "[Frameworx](https://opensource.org/licenses/Frameworx-1.0)"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "no license"){
    return ""
  } else {
    return "- [LICENSE](#license)"
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}


## Table of Contents
- [DESCRIPTION](#description)
${renderLicenseSection(data.license)}
- [INSTALLATION](#installation)
- [USAGE](#usage)
- [CONTRIBUTION](#contribution)
- [TESTING](#testing)
- [QUESTIONS](#questions)

## Description 
- ${data.description}
## License
${renderLicenseBadge(data.license)}
- ${renderLicenseLink(data.license)}

## Installation 
- ${data.installation}
## Usage 
- ${data.usage}
## Contribution 
- ${data.contributing}
## Testing 
- ${data.test}
## Questions
For additonal information contact:
- github: [${data.github}](https://github.com/${data.github})
- email: ${data.email}
`;
}
module.exports = generateMarkdown;
