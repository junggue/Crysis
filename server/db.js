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
  admin: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  },
  salt: Sequelize.STRING,
  hash: Sequelize.STRING,
  //authentication goes here
  password: {
    type: Sequelize.VIRTUAL,
    allowNull: false,
    validate: {
      length: [10, 100]
    },
    set: function(value) {
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync(value, salt);
      this.setDataValue('salt', salt);
      this.setDataValue('hash', hash);
      this.setDataValue('password', value);
    }
  }
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
  emergencyStatus: Sequelize.BOOLEAN,
  orgSalt: Sequelize.STRING,
  orgHash: Sequelize.STRING,
  //Auth for organization
  password: {
    type: Sequelize.VIRTUAL,
    allowNull: false,
    validate: {
      length: [10, 100]
    },
    set: function(value) {
      var orgSalt = bcrypt.genSaltSync(10);
      var orgHash = bcrypt.hashSync(value, orgSalt);
      this.setDataValue('orgSalt', orgSalt);
      this.setDataValue('orgHash', orgHash);
      this.setDataValue('password', value);
    }
  },
  tableName: 'Organizations',
  timestamps: true
})

var Emergency = sequelize.define('Emergency', {
  instructions: Sequelize.TEXT,
  emergencyType: Sequelize.STRING,
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
