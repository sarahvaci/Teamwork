const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const fs = require('fs');
const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'teamwork.html');

//store 
const employeeMembers = [];
const idArray = [];

// Inform user of usage
console.log(
    '\nWelcome to the team generator!\nUse `npm run reset` to reset the dist/ folder\n'
);

function produceManager() {
    console.log('Please build a team');
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'managerName',
          message: "What is the team manager's name?",
        },
        {
          type: 'input',
          name: 'managerId',
          message: "What is the team manager's id?",
        },
        {
          type: 'input',
          name: 'managerEmail',
          message: "What is the team manager's email?",
        },
        {
          type: 'input',
          name: 'managerOfficeNumber',
          message: "What is the team manager's office number?",
        },
      ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNumber
        );
        employeeMembers.push(manager);
        idArray.push (answers.managerId);
        produceTeam ();
               
      });
  }

  function produceTeam () {
    inquirer
    .prompt ([
    {
            type: 'list',
            name: 'memberChoice',
            message: 'What kind of team member are you hoping to bring on board?',
            choices: [
              'Engineer',
              'Intern',
              "There's no need for us to expand our team at this time.",
            ],
    },
   ])
   .then ((userOption) => {
    switch (userOption.memberChoice) {
        case 'Engineer':
            includeEngineer();
            break;
        case 'Intern':
            includeIntern();
            break;
        default:
            buildTeam();      //come back 
    }
   });

  }

  function includeEngineer () {
    inquirer
        .prompt ([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is your engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerId',
            message: "What is your engineer's id?" 
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is your engineer's email?"
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is your engineer's GitHub username?"
        },  
    ])
    .then ((answers) => {
    const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGithub
      );
      employeeMembers.push(engineer);
      idArray.push (answers.managerId);
      produceTeam ();
    });
}

function includeIntern() {
    inquirer
        .prompt ([
        {
            type: 'input',
            name: 'internName',
            message: "What is your intern's name?"
        },
        {
            type: 'input',
            name: 'internId',
            message: "What is your intern's id?" 
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is your intern's email?"
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is your intern's school?"
        },  
    ])
    .then ((answers) => {
        const intern = new Intern(
            answers.internName,
            answers.internId,
            answers.internEmail,
            answers.internSchool
          );
      employeeMembers.push(intern);
      idArray.push (answers.internId);
      produceTeam ();
    });
}

function buildTeam() {
    // Create the output directory if the dist path doesn't exist
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
    fs.writeFileSync(distPath, render(employeeMembers), 'utf-8');
  }

  produceManager ();