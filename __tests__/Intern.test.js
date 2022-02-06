const Intern = require('../lib/Intern');

test('can add school', () => {
	const intern = new Intern('dan', '3', 'dan@gmail.com', 'Southern');

	expect(intern.school).toBe('Southern');
})