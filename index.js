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
        message: "Please Provide the Manager's Id Number",
        validate: manageridInput => {
            if (isNaN(manageridInput)) 
            {
                console.log("Please enter a numerical value");
                return false;
            } else {
                return true;
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
            if (isNaN(managerofficenumberInput)) 
            {
                console.log("Please enter a numerical value");
                return false;
            } else {
                return true;
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
                name: 'employee',
                message: 'What Type of Employee Would You Like to Add?',
                choices: [
                    'Engineer',
                    'Intern',
                ],
            },

            {
                type: 'input',
                name: 'engineerName',
                message: "What is the Engineer's name?",
                when: ({ employee }) => {
                    if (employee === 'Engineer') return true;
                    else return false;
                }
            },

            {
                type: 'input',
                name: 'engineerID',
                message: "What is the Engineer's ID Number?",
                when: ({ employee }) => {
                    if (employee === 'Engineer') return true;
                    else return false;
                },
                validate: engineeridInput => {
                    if (isNaN(engineeridInput)) 
                    {
                        console.log("Please enter a numerical value");
                        return false;
                    } else {
                        return true;
                    }
                }
            },

            {
                type: 'input',
                name: 'engineerEmail',
                message: "What is the Engineer's Email Address?",
                when: ({ employee }) => {
                    if (employee === 'Engineer') return true;
                    else return false;
                }
            },

            {
                type: 'input',
                name: 'engineerGithub',
                message: "What is the Engineer's Github Username?",
                when: ({ employee }) => {
                    if (employee === 'Engineer') return true;
                    else return false;
                }

            },


            {
                type: 'input',
                name: 'internName',
                message: "What is the Intern's name?",
                when: ({ employee }) => {
                    if (employee === 'Intern') return true;
                    else return false;
                }
            },

            {
                type: 'input',
                name: 'internID',
                message: "What is the Intern's ID Number?",
                when: ({ employee }) => {
                    if (employee === 'Intern') return true;
                    else return false;
                },
                validate: internidInput => {
                    if (isNaN(internidInput)) 
                    {
                        console.log("Please enter a numerical value");
                        return false;
                    } else {
                        return true;
                    }
                }
                
            },

            {
                type: 'input',
                name: 'internEmail',
                message: "What is the Intern's Email Address?",
                when: ({ employee }) => {
                    if (employee === 'Intern') return true;
                    else return false;
                }
            },

            {
                type: 'input',
                name: 'internSchool',
                message: "What School is the Intern Enrolled in?",
                when: ({ employee }) => {
                    if (employee === 'Intern') return true;
                    else return false;
                }
            }
        ]
    }
];

inquirer.prompt(appPrompts)
    .then((answers) => {
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerOfficeNumber);
        mgrArr.push(manager);


        if (answers.more) {
            for (let i = 0; i < answers.more.length; i++) {
                if (answers.more[i].employee === 'Engineer') {
                    const engineer = new Engineer(answers.more[i].engineerName, answers.more[i].engineerID, answers.more[i].engineerEmail, answers.more[i].engineerGithub);
                    engrArr.push(engineer);
                } else {
                    const intern = new Intern(answers.more[i].internName, answers.more[i].internID, answers.more[i].internEmail, answers.more[i].internSchool);
                    internArr.push(intern);
                }
            }
        }
        return;
    })
    .then(() => {
        return generateHTML(mgrArr, engrArr, internArr);
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