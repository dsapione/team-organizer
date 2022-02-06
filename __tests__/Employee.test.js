const Employee = require('../lib/Employee');

test('can add name', () => {
	const name = 'dan'
	const employee = new Employee(name);
	expect(employee.name).toBe(name);
})

test('can add id', () => {
	const employee = new Employee('dan', '3', 'dan@gmail.com');

	expect(employee.id).toBe('3');
})

test('can add email', () => {
	const employee = new Employee('dan', '3', 'dan@gmail.com');

	expect(employee.email).toBe('dan@gmail.com');
})
