const inquirer = require('inquirer');
const generateHTML = require('./util/generateHTML');
const generateCSS = require('./util/generateCSS');
const Manager = require('./lib/Manager');
const teamData = {};
const commonQuestions = [
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
  {
    type: 'input',
    name: 'id',
    message: `Staff's ID:`,
    validate: idInput => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter staff's id");
        return false;
      }
    },
  },
  {
    type: 'input',
    name: 'email',
    message: `Staff's Email:`,
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log("Please enter staff's email");
        return false;
      }
    },
  },
];

// ask for other members' info
const promptStaff = teamData => {
  if (!teamData.engineer) {
    teamData.engineer = [];
  }
  if (!teamData.intern) {
    teamData.intern = [];
  }

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'position',
        message: 'Add another staff:',
        choices: ['engineer', 'intern'],
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
        when: ({ position }) => position === 'engineer',
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
        when: ({ position }) => position === 'intern',
      },
      {
        type: 'list',
        name: 'addMore',
        message: `Add more staff?`,
        choices: ['yes', 'no'],
      },
    ])
    .then(memberData => {
      const { position, addMore } = memberData;
      delete memberData.position;
      delete memberData.addMore;
      teamData[position].push(memberData);
      console.log(teamData);
      if (addMore === 'yes') {
        promptStaff(teamData);
      }
    });
};

// promptStaff({ manager: { name: '1', id: '2', email: '34', officeNumber: '5' } });

// ask for manager's info
const promptManager = () => {
  inquirer
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
    .then(managerData => {
      teamData.manager = managerData;
      return teamData;
    })
    // .then(data => {
    //   const { name, id, email, officeNumber } = data;
    //   const manager = new Manager(name, id, email, officeNumber);
    //   console.log(manager);
    // });
    .then(promptStaff);
};

generateHTML();
generateCSS();
