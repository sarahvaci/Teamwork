const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

//store 
const employeeMembers = [];
const idArray = [];

// Inform user of usage
console.log(
    '\nWelcome to the team generator!\nUse `npm run reset` to reset the dist/ folder\n'
);

const addEngineer = [
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
}

]

const createManager = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?"  
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the team manager's id?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email?"
    },
    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "What is the team manager's office number?" 
    }
]

const addIntern = [
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
    }
]





