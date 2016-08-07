var db = require('./db.js');

module.exports = (function () {

	db.Organization.bulkCreate([
		{
			username: 'Toiletz',
			password: 'password123',
			safezone: 'Courtyard',
			emergencyStatus: false
		},
		{
			username: 'Cool & Co',
			password: 'thisisourpassword',
			safezone: 'alley behind building C',
			emergencyStatus: false
		},
		{
			username: 'Sidecar Donuts',
			password: 'doughnutsaregreat',
			safezone: 'park across the street',
			emergencyStatus: false
		}
	]);

	db.Employee.bulkCreate([
		{
			username: 'woodmerik',
			email: 'woodmerik@aol.com',
			password: 'password123',
			name: 'Merik Wood',
			isWarden: true,
			wardenName: 'woodmerik',
			status: true,
			isAdmin: true,
			organizationId: 1
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
			organizationId: 1
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
			organizationId: 1
		},
		{
			username: 'velazsteph',
			email: 'stephvelaz@yahoo.com',
			password: '34password567',
			name: 'Steph Velaz',
			isWarden: false,
			wardenName: 'woodmerik',
			status: true,
			isAdmin: false,
			organizationId: 1
		},
		{
			username: 'marcober',
			email: 'marcober@yahoo.com',
			password: 'anotherpassword',
			name: 'Marco Ber',
			isWarden: true,
			wardenName: 'marcober',
			status: true,
			isAdmin: true,
			organzationId: 2
		},
		{
			username: 'janefong',
			email: 'fongjane@yahoo.com',
			password: 'password3456',
			name: 'Jane Fong',
			isWarden: false,
			wardenName: 'marcober',
			status: true,
			isAdmin: true,
			organizationId: 2
		},
		{
			username: 'kuhchris',
			email: 'kuhchris@aol.com',
			password: 'cookies123',
			name: 'Chris Kuh',
			isWarden: false,
			wardenName: 'marcober',
			status: true,
			isAdmin: false,
			organizationId: 2
		},
		{
			username: 'mlester',
			email: 'mlester@yahoo.com',
			password: 'password7777',
			name: 'Sean Lester',
			isWarden: true,
			wardenName: 'mlester',
			status: true,
			isAdmin: true,
			organizationId: 3
		},
		{
			username: 'junden',
			email: 'jundenny@yahoo.com',
			password: 'dietcoke3456',
			name: 'Den Jun',
			isWarden: false,
			wardenName: 'mlester',
			status: true,
			isAdmin: false,
			organizationId: 3
		},
		{
			username: 'chenjust',
			email: 'justchen@yahoo.com',
			password: 'password1290',
			name: 'Just Chen',
			isWarden: false,
			wardenName: 'mlester',
			status: true,
			isAdmin: true,
			organzationId: 3
		}
	])

})();
