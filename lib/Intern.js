const inquirer = require('inquirer')
const Employee = require('../lib/Employee')

class Intern extends Employee {
	constructor() {
		super()
		this.school;
	}
	
	getSchool() {
		inquirer.prompt({
			type: 'input',
			name: 'school',
			message: 'What school does this intern attend?'
		}).then((school) => {
			this.school = new Intern(school);

			this.getRole();
		})
	}
	
	getRole() {
		return Intern
	}
}

module.exports = Intern