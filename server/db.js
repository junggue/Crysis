var Sequelize = require('sequelize');
var _ = require('lodash');
var bcrypt = require('bcrypt');

var sequelize = newSequelize('postgres://admin:MKIIYOLGKLYYSDMR@aws-us-east-1-portal.9.dblayer.com:11193/compose');

sequelize
  .authenticate()
  .then(function (err) {
    console.log('Connection has been established successfully.');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

var Employee = sequelize.define('Employee', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true
    }
  },
  name: Sequelize.STRING,
  role: Sequelize.STRING,
  warden: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  status: Sequelize.BOOLEAN,
  admin: Sequelize.BOOLEAN,
  password: //authentication goes here
  tableName: 'Employees',
  timestamps: true
})

var Organization = sequelize.define('Organization', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  safezone: Sequelize.STRING,
  emergency_status: Sequelize.BOOLEAN,
  password: //auth goes here
  //Do we need emergency id here? How/where do we input foreign keys?
  tableName: 'Organizations',
  timestamps: true
})

var Emergency = sequelize.define('Emergency', {
  instructions: Sequelize.TEXT,
  emergency_type: Sequelize.STRING,
  //map goes here
  tableName: 'Emergencies',
  timestamps: true
})

Organization.hasMany(Employee, {foreignKey: 'OrganizationId'});
Emergency.hasMany(Organization, {foreignKey: 'EmergecnyId'});

sequelize.sync().then(function() {
  console.log('Tables created');
})

exports.Employee = Employee;
exports.Organization = Organization;
exports.Emergency = Emergency;
