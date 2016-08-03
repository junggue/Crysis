var db = require('../server/db.js');

exports.dummyData = function () {

	db.Organization.create({
		username: 'Toiletz',
		password: '123dog',
		safezone: 'Courtyard',
		emergencyStatus: false
	});

	db.Employee.bulkCreate([
		{
			username: 'woodmerik',
			email: 'woodmerik@aol.com',
			password: 'password1',
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
			password: '1234pass',
			name: 'Jung Yang',
			isWarden: false,
			wardenName: 'woodmerik',
			status: true,
			isAdmin: false,
			OrganizationId: 1
		},
	])
}
