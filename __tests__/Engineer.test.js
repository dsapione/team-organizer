const Engineer = require('../lib/Engineer');

test('can add github username', () => {
	const engineer = new Engineer('dan', '3', 'dan@gmail.com', 'dsapione1234');

	expect(engineer.github).toBe('dsapione1234');
})