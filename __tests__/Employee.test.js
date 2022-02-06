const Employee = require('../lib/Employee');

test('can add name', () => {
	const name = 'dan'
	const employee = new Employee(name);
	expect(employee.name).toBe(name)
})
