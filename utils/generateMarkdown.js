// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'GNU GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '[MIT License](https://opensource.org/licenses/MIT)';
  } else if (license === 'GNU GPLv3') {
    return '[GNU GPLv3 License](https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'Apache') {
    return '[Apache License](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'ISC') {
    return '[ISC License](https://opensource.org/licenses/ISC)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
    return 'This project is licensed under the MIT License.';
  } else if (license === 'GNU GPLv3') {
    return 'This project is licensed under the GNU GPLv3 License.';
  } else if (license === 'Apache') {
    return 'This project is licensed under the Apache License.';
  } else if (license === 'ISC') {
    return 'This project is licensed under the ISC License.';
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `# ${data.title} ${renderLicenseBadge(data.license)}

  ## Description
    ${data.description}

  ## Table of Contents
  1. [Description](#description)
  `;
  if (data.installation) {
    markdown += `2. [Installation](#installation)\n`;
  }
  if (data.usage) {
    markdown += `  3. [Usage](#usage)\n`;
  }
  if (data.contributors) {
    markdown += `  4. [Contributors](#contributors)\n`;
  }
  if (data.test) {
    markdown += `  5. [Testing](#testing)\n`;
  }
  if (data.license) {
    markdown += `  6. [License](#license)\n`;
  }
    if (data.installation) {
      markdown += `
  ## Installation
    ${data.installation}
    `;
      }

      if (data.usage) {
          markdown += `
  ## Usage
    ${data.usage}
    `;
      }

  markdown += `
  ## Contributors
    ${data.contributors}
  `;
  if (data.test) {
    markdown += `
  ## Testing
    ${data.test}
    `;
  }
  markdown += `
  ## Reach Out
    If you have any questions, please feel free to reach out to me on GitHub at [@${data.github}](https://github.com/${data.github}) or via email at ${data.email}.
  `;

  if (data.license) {
    markdown += `
  ## License
    ${renderLicenseBadge(data.license)} 
    ${renderLicenseLink(data.license)}
    ${renderLicenseSection(data.license)}
    `;
  }
  return markdown;

}

module.exports = generateMarkdown;
