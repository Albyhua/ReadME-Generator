function renderLicenseBadge(license) {
  if (license !== 'None'){ // if the user selects a license, a badge will generate, if not a bad will not be generated.
    return `[![License](https://img.shields.io/badge/License-${license}-blue)](https://opensource.org/licenses/${license})`; // 
  }
  return ''; // returning a result for both true and false
}


function renderLicenseLink(license) {
  if (license !== 'None'){ // if the user selects a license, a badge will generate, if not a bad will not be generated.
    return `(https://opensource.org/licenses/${license})`;
  }
  return '';
}


function renderLicenseSection(license) {
  if (license !== 'None') {
    return (
      `## License

This project is licensed under the ${license} license.`
    );
  }
  return '';
}


function generateMarkdown(data) { // main function to produce readME
  return `
# ${data.title}
    
## Description 
    
${data.description}
  
${renderLicenseLink(data.license)}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Features](#features)

## Installation 
  
${data.installation}
    
## Usage 
    
${data.usage}
    
## Credits 
    
${data.credits}
  
## License

# ${data.title}

${renderLicenseBadge}

- ${renderLicenseSection(data.license)}
  
## Features

${data.features}

  `;
  }
  
  module.exports = generateMarkdown;