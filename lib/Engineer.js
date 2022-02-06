const inquirer = require('inquirer')
const Employee = require('../lib/Employee')

class Engineer extends Employee {
	constructor() {
		this.github;		
		super()
	}
	
	getGithub() {
		inquirer.prompt({
			type: 'input',
			name: 'github',
			message: 'What is this engineer\'s GitHub username?'
		}).then((github) => {
			this.github = new Engineer(github);

			this.getRole();
		})
	}
	
	getRole() {
		return Engineer
	}
}

module.exports = Engineer