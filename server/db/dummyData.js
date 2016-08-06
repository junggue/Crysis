var db = require('../server/db.js');

module.exports = (function () {

	db.Organization.create({
		username: 'Toiletz',
		password: 'password123',
		safezone: 'Courtyard',
		emergencyStatus: false
	});

	db.Employee.bulkCreate([
		{
			username: 'woodmerik',
			email: 'woodmerik@aol.com',
			password: 'password123',
			name: 'Merik Wood',
			isWarden: true,
			wardenName: null,
			status: true,
			isAdmin: true,
			OrganizationId: 1
		},
		{
			username: 'terramatt',
			email: 'mattterra@aol.com',
			password: 'password123',
			name: 'Matt Terra',
			isWarden: false,
			wardenName: 'woodmerik',
			status: true,
			isAdmin: false,
			OrganizationId: 1
		},
		{
			username: 'yangjung',
			email: 'yangjung@aol.com',
			password: 'password123',
			name: 'Jung Yang',
			isWarden: false,
			wardenName: 'woodmerik',
			status: true,
			isAdmin: false,
			OrganizationId: 1
		}
	])

})();