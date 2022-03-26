const inquirer = require('inquirer');
const generateHTML = require('./src/template-html.js');
const generateCSS = require('./src/template-css.js');
const generateHTMLFile = require('./util/generateHTML');
const generateCSSFile = require('./util/generateCSS');

const commonQuestions = [
  {
    type: 'input',
    name: 'id',
    message: `Employee's ID:`,
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter employee's id");
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: `employee's Email:`,
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter employee's email");
        return false;
      }
    },
  },
];

const addMoreStaff = teamData => {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'addPosition',
        message: 'Add more staff?',
        choices: ['engineer', 'intern', 'no'],
      },
    ])
    .then(answer => {
      if (answer.addPosition !== 'no') {
        teamData.addPosition = answer.addPosition;
        return promptStaff(teamData);
      } else {
        delete teamData.addPosition;
        console.log(teamData);

        return teamData;
      }
    });
};

// ask for other members' info
const promptStaff = teamData => {
  const { addPosition } = teamData;
  if (!teamData[addPosition]) {
    teamData[addPosition] = [];
  }

  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: `Staff's Name:`,
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter staff's name");
            return false;
          }
        },
      },
      ...commonQuestions,
      {
        type: 'input',
        name: 'github',
        message: `Staff's Github Username:`,
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log("Please enter staff's github username");
            return false;
          }
        },
        when: () => teamData.addPosition === 'engineer',
      },
      {
        type: 'input',
        name: 'school',
        message: `Staff's School:`,
        validate: schoolInput => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter staff's school");
            return false;
          }
        },
        when: () => teamData.addPosition === 'intern',
      },
    ])
    .then(memberData => {
      teamData[addPosition].push(memberData);
      return teamData;
    })
    .then(addMoreStaff);
};

// ask for manager's info
const getTeam = () => {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: `Manager's Name:`,
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter manager's name");
            return false;
          }
        },
      },
      ...commonQuestions,
      {
        type: 'input',
        name: 'officeNumber',
        message: `Manager's Office Number:`,
        validate: officeNumberInput => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log("Please enter manager's office number");
            return false;
          }
        },
      },
    ])
    .then(staffData => {
      const teamData = {};
      teamData.manager = staffData;
      return teamData;
    })
    .then(addMoreStaff);
};

getTeam()
  .then(generateHTML)
  .then(htmlContent => {
    generateHTMLFile(htmlContent);
    generateCSSFile(generateCSS);
  });
