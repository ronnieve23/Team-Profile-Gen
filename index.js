const inquirer = require('inquirer');
inquirer.registerPrompt('recursive', require('inquirer-recursive'));
const generateHTML = require('./src/page-template.js')
const { writeFile, copyFile } = require('./src/generateHtml.js');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const [mgrArr, engrArr, internArr] = [[], [], []];
const alert = 'Please provide an answer';
const appPrompts = [
    {
        type: 'input',
        name: 'managerName',
        message: "Please Provide the Manager's Name",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log(alert);
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'managerID',
        message: "Please Provide the Manager's Id number",
        validate: manageridInput => {
            if (manageridInput) {
                return true;
            } else {
                console.log(alert);
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'managerEmail',
        message: "Please Provide the Manager's Email Address",
        validate: manageremailInput => {
            if (manageremailInput) {
                return true;
            } else {
                console.log(alert);
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'managerOfficeNumber',
        message: "Please Provide the Manager's Office Number",
        validate: managerofficenumberInput => {
            if (managerofficenumberInput) {
                return true;
            } else {
                console.log(alert);
                return false;
            }
        }
    },
    {
        type: 'recursive',
        name: 'more',
        message: 'Would you like to add more team members?',
        prompts: [
            {
                type: 'list',
                name: 'employeeType',
                message: 'What Type of Employee Would You Like to Add?',
                choices: [
                    'Engineer',
                    'Intern',
                ],
            },

            {
                type: 'input',
                name: 'engineerName',
                message: "What is the Employee's name?",
                when: ({ employeeType }) => {
                    if (employeeType === 'Engineer') return true;
                    else return false;
                }
            },

            {
                type: 'input',
                name: 'engineerID',
                message: "What is the Employee's ID Number?",
                when: ({ employeeType }) => {
                    if (employeeType === 'Engineer') return true;
                    else return false;
                }
            },

            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the Employee's Email Address?",
                when: ({ employeeType }) => {
                    if (employeeType === 'Engineer') return true;
                    else return false;
                }
            },

            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is the Employee's Github Username?",
               
            }
        ]
    }
];

inquirer.prompt(appPrompts)
    .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
        mgrArr.push(manager);


        if (answers.more){
            for ( let i=0; i<answers.more.length; i++){
                if (answers.more[i].employeeType === 'Engineer'){
                    const engineer = new Engineer(answers.more[i].engineerName, answers.more[i].engineerID, answers.more[i].engineerEmail, answers.more[i].engineerGithub);
                    engrArr.push = (engineer);
                }
            }
        }
    })
    .then(() => {
        return generateHTML(mgrArr,engrArr);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
    })
    .catch(err => {
        console.log(err);
    });