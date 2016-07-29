module.exports = {
	org: {
		org_name: 'Cerebro',
		password: 'klsd34jksd',
		safezone: 'the zone',
		emergency_status: 'false'
	},
	employees: [
		{
			username: "mBardico",
			password: "alkjsdf39",
			name: "Melinda Bardico",
			organization_id: "24",
			type: "warden",
			warden_username: "null",
			status: "default",
			admin: true
		},
		{
			username: "PhilSleven",
			password: "alsdgsghhadf39",
			name: "Phil Seidel",
			organization_id: "24",
			type: "regular",
			warden_username: "mBardico",
			status: "default",
			admin: false
		},
		{
			username: "MikeyT",
			password: "209jks932",
			name: "Dirty Mike",
			organization_id: "24",
			type: "regular",
			warden_username: "mBardico",
			status: "default",
			admin: false
		}
	]
} 