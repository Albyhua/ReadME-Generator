// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create a function to write README file
function writeToFile(fileName, data) { //function that has the layout of the readme, which then be generated one the user completes a list of question down below.

  const readMe = generateMarkdown(data) // we are using the function from the the other js so we no longer have to have to write out the readme layout here and makin git easier to read what is written down

  fs.writeFileSync(fileName, readMe, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });

}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Give a decription of your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Provide a steps require to install your project.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Provide instructions and examples for use.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'List your collaborators, if any.',
        name: 'credits',
      },
      {
        type: 'list', // setting type to list to have choices to work
        message: 'Please select a license.',
        choices: ['None', 'MIT', 'Apache-2.0', 'BSD-3-Clause'],
        name: 'license',
      },
      {
        type: 'input',
        message: 'List features that your project has.',
        name: 'features',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      }
    ])
    .then(answers => { // once user is done answering questions, this line of code will generate a README with their responses.
      writeToFile('READMEexample.md', answers); 
    })

}

// Function call to initialize app
init();

