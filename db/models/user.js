/* eslint-disable */
const db = require('..');
const Sequelize = require('sequelize');
const crypto = require('crypto');
const bcrypt = require("bcrypt");

// TODO: Define constraints 

const User = db.define(
  'users', {
  email: {
    type: Sequelize.STRING,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    /* By making password a function, you are basically setting it private with closure.
      When querying, it will show only as a function and not plaintext
    */
    get() {
      return () => this.getDataValue('password');
    }
  },
  // salt: {
  //   type: Sequelize.STRING,
  //   get() {
  //     return () => this.getDataValue('salt');
  //   }
  // },
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  },
  weight: {
    type: Sequelize.ARRAY(Sequelize.INTEGER)
  },
  avatarUrl: {
    type: Sequelize.STRING,
    allowNull: true
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  height: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  gender: {
    type: Sequelize.ENUM('M', 'F'),
    allowNull: true
  },
  verified: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }


}
);

module.exports = User;

User.prototype.correctPassword = async function (password) {
  const match = await bcrypt.compare(password, this.password());
  return match;
};


User.encryptPassword = function (plainText) {
  return bcrypt
    .hash(plainText, 10)
};

// Hooks to salt and hash password. Only do it if the password has been set or 'changed'
const setSaltAndPassword = async user => {
  console.log('salt running...', user);
  if (user.changed('password')) {
    user.password = await User.encryptPassword(user.password());
  }
};

const capitalizeFirstLetter = user => {
  if (user.changed('first_name') && user.changed('last_name')) {
    user.first_name = user.first_name[0].toUpperCase() + user.first_name.slice(1);
    user.last_name = user.last_name[0].toUpperCase() + user.last_name.slice(1);
  }
}

const capitalizeFirstLetterOnModelUpdate = users => {
  if (users.attributes.first_name && users.attributes.last_name) {
    users.attributes.first_name = users.attributes.first_name[0].toUpperCase() + users.attributes.first_name.slice(1);
    users.attributes.last_name = users.attributes.last_name[0].toUpperCase() + users.attributes.first_name.slice(1);
  }
}

User.beforeCreate(capitalizeFirstLetter);
User.beforeBulkUpdate(capitalizeFirstLetterOnModelUpdate);   // Model.update
User.beforeCreate(setSaltAndPassword);
User.beforeUpdate(setSaltAndPassword);  // Used when instance.update