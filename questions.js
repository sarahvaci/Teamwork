const { default: inquirer } = require("inquirer");


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
    }])
  }