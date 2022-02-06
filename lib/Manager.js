const inquirer = require('inquirer')
const Employee = require('../lib/Employee')

class Manager extends Employee {
	constructor() {
		this.office;
		super()
	}
	
	officeNumber() {
		inquirer.prompt ({
			type: 'number',
			name: 'office',
			message: 'What is this manager\'s office number?'
		}).then((office) => {
			this.office = new Manager(office);

			this.getRole();
		})
	}
	
	getRole() {
		return Manager
	}
}

module.exports = Manager