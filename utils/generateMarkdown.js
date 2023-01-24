// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Github licence](http://img.shields.io/badge/license-${data.license}-yellow.svg)


  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  The license for this project is ${data.license}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.testing}

  ## Questions
  If you have any questions, please contact me ${data.email}. Here is a link to my github page ${data.github}
`;
}

// * Description 
//       * Table of Contents 
//       * Installation 
//       * Usage 
//       * License 
//       * Contributing 
//       * Tests 
//       * Questions
module.exports = generateMarkdown;
