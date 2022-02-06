const inquirer = require('inquirer');
const Intern = require('../lib/Intern');
const Engineer = require('../lib/Engineer');
const Manager = require('../lib/Manager');

class Employee {
	constructor() {
		this.employee;
		this.id;
		this.email;
		this.role;
	}
	getName() {
		inquirer.prompt ({
			type: 'input',
			name: 'name',
			message: 'What is this employee\'s name?'
		}).then((name) => {
			this.employee = new Employee(name);

			this.getId();
		})
	}

	getId() {
		inquirer.prompt({
			type: 'number',
			name: 'id',
			message: 'What is this employee\'s id?'
		}).then((id) => {
			this.id = new Employee(id);

			this.getEmail()
		})
	}

	getEmail() {
		inquirer.prompt({
			type: 'input',
			name: 'email',
			message: 'What is this employee\'s email?'
		}).then((email) => {
			this.email = new Employee(email);

			this.getRole()
		})
	}

	getRole() {
		inquirer.prompt({
			type: 'list',
			name: 'role',
			message: 'What is this employee\'s role?',
			choices: ['Intern', 'Engineer', 'Manager'],
		}).then((role) => {
			if (role === 'Intern') {				
				new Intern();
			} else if (role === 'Manager') {
				new Employee();
			} else if (role === 'Engineer') {
				new Engineer();
			}
		})
	}
}

module.exports = Employee;
