const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path')
const htmlGenerator = require('./src/htmlGenerator')

const team = [];

const init = () => {
	console.log('welcome to my company')
	callQuestion();
}

const callQuestion = () => {
	inquirer.prompt({
		type: 'list',
		name: 'role',
		message: 'What type of employee would you like to add?',
		choices: ['Intern', 'Engineer', 'Manager', 'None'],
	}).then(({role}) => {
		if (role === 'Intern') {
			addIntern();
		} else if (role === 'Engineer') {
			addEngineer();
		} else if (role === 'Manager') {
			addManager();
		} else if (role === 'None') {
			const targetFolder = path.resolve(__dirname, 'dist');
			if (!fs.existsSync(targetFolder)) {
				fs.mkdirSync(targetFolder);
			}
			fs.writeFileSync(path.join(targetFolder, 'index.html'), htmlGenerator(team), 'utf8')
		}
	})
}

const manQuestions = [
	{
		type: 'input',
		name: 'name',
		message: 'What is this employee\'s name?'
	},
	{
		type: 'number',
		name: 'id',
		message: 'What is this employee\'s id?'
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is this employee\'s email?'
	},
	{
		type: 'number',
		name: 'office',
		message: 'What is this manager\'s office number?'
	}
]

const intQuestions = [
	{
		type: 'input',
		name: 'name',
		message: 'What is this employee\'s name?'
	},
	{
		type: 'number',
		name: 'id',
		message: 'What is this employee\'s id?'
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is this employee\'s email?'
	},
	{
		type: 'input',
		name: 'school',
		message: 'What school does this intern attend?'
	}
]

const engQuestions = [
	{
		type: 'input',
		name: 'name',
		message: 'What is this employee\'s name?'
	},
	{
		type: 'number',
		name: 'id',
		message: 'What is this employee\'s id?'
	},
	{
		type: 'input',
		name: 'email',
		message: 'What is this employee\'s email?'
	},
	{
		type: 'input',
		name: 'github',
		message: 'What is this engineer\'s GitHub username?'
	}
]

const addManager = () => {
	inquirer.prompt(manQuestions).then(answers => {
		const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
		team.push(manager);
		callQuestion();
	})
}

const addIntern = () => {
	inquirer.prompt(intQuestions).then(answers => {
		const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
		team.push(intern);
		callQuestion();
	})
}

const addEngineer = () => {
	inquirer.prompt(engQuestions).then(answers => {
		const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
		team.push(engineer);
		callQuestion();
	})
}

init();