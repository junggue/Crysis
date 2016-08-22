var db = require('./db.js');

module.exports = (function () {

	db.Organization.bulkCreate([
		{
			orgName: 'MKS41',
			orgPassword: 'password123',
			safezone: 'Side Car',
			emergencyStatus: false
		},
		{
			orgName: 'Crysis',
			orgPassword: 'password123',
			safezone: 'Spinfish Poke',
			emergencyStatus: false
		}
	]);

	db.Employee.bulkCreate([
		{
			username: 'chadd',
			email: 'test1@mks.com',
			password: 'password123',
			name: 'Chadd Bennett',
			isWarden: true,
			wardenName: 'Chadd',
			status: 'safe',
			isAdmin: true,
			organizationId: 1,
			deviceToken: ''
		},
		{
			username: 'ariel',
			email: 'test2@mks.com',
			password: 'password123',
			name: 'Ariel Cook',
			isWarden: false,
			wardenName: 'Chadd',
			status: 'safe',
			isAdmin: false,
			organizationId: 1,
			deviceToken: ''
		},
		{
			username: 'chris',
			email: 'test3@mks.com',
			password: 'password123',
			name: 'Chris Kuh',
			isWarden: false,
			wardenName: 'Chadd',
			status: 'safe',
			isAdmin: false,
			organizationId: 1,
			deviceToken: ''
		},
		{
			username: 'dailen',
			email: 'test4@mks.com',
			password: 'password123',
			name: 'Dailen Spencer',
			isWarden: false,
			wardenName: 'Chadd',
			status: 'safe',
			isAdmin: false,
			organizationId: 1,
			deviceToken: ''
		},
		{
			username: 'jason',
			email: 'test5@mks.com',
			password: 'password123',
			name: 'Jason Lee',
			isWarden: false,
			wardenName: 'Chadd',
			status: 'safe',
			isAdmin: false,
			organizationId: 1,
			deviceToken: ''
		},
		{
			username: 'joseph',
			email: 'test6@mks.com',
			password: 'password123',
			name: 'Joseph Capezzuto',
			isWarden: false,
			wardenName: 'Chadd',
			status: 'safe',
			isAdmin: false,
			organizationId: 1,
			deviceToken: ''
		},
		{
			username: 'michael',
			email: 'test7@mks.com',
			password: 'password123',
			name: 'Michael Chen',
			isWarden: false,
			wardenName: 'Chadd',
			status: 'safe',
			isAdmin: false,
			organizationId: 1,
			deviceToken: ''
		},
		{
			username: 'mike',
			email: 'test8@mks.com',
			password: 'password123',
			name: 'Mike Terranova',
			isWarden: false,
			wardenName: 'Chadd',
			status: 'safe',
			isAdmin: false,
			organizationId: 1,
			deviceToken: ''
		},
		{
			username: 'nizar',
			email: 'test9@mks.com',
			password: 'password123',
			name: 'Nizar Ayari',
			isWarden: false,
			wardenName: 'Chadd',
			status: 'safe',
			isAdmin: false,
			organizationId: 1,
			deviceToken: ''
		},
		{
			username: 'phil',
			email: 'test10@mks.com',
			password: 'password123',
			name: 'Phil Seidel',
			isWarden: false,
			wardenName: 'Chadd',
			status: 'safe',
			isAdmin: false,
			organizationId: 1,
			deviceToken: ''
		},
		{
			username: 'ryan',
			email: 'test11@mks.com',
			password: 'password123',
			name: 'Ryan Morris',
			isWarden: false,
			wardenName: 'Chadd',
			status: 'safe',
			isAdmin: false,
			organizationId: 1,
			deviceToken: ''
		},
		{
			username: 'merik',
			email: 'test12@mks.com',
			password: 'password123',
			name: 'Merik Woodmansee',
			isWarden: true,
			wardenName: 'merik',
			status: 'safe',
			isAdmin: true,
			organizationId: 2,
			deviceToken: ''
		},
		{
			username: 'matt',
			email: 'test13@mks.com',
			password: 'password123',
			name: 'Matt Terranova',
			isWarden: false,
			wardenName: 'merik',
			status: 'safe',
			isAdmin: false,
			organizationId: 2,
			deviceToken: ''
		},
		{
			username: 'junggue',
			email: 'test14@mks.com',
			password: 'password123',
			name: 'Junggue Yang',
			isWarden: false,
			wardenName: 'merik',
			status: 'safe',
			isAdmin: false,
			organizationId: 2,
			deviceToken: ''
		},
		{
			username: 'stephanie',
			email: 'test15@mks.com',
			password: 'password123',
			name: 'Stephanie Velazquez',
			isWarden: false,
			wardenName: 'merik',
			status: 'safe',
			isAdmin: false,
			organizationId: 2,
			deviceToken: ''
		}
	])

})();
