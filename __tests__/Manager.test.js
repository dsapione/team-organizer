const Manager = require('../lib/Manager');

test('can add office number', () => {
	const manager = new Manager('dan', '3', 'dan@gmail.com', '101');
	
	expect(manager.office).toBe('101');
})