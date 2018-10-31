require('dotenv').config();
var Sequelize  = require('sequelize');
//connect
var sequelize = new Sequelize({
    username: process.env.USER,
    password:process.env.PASSWORD,
    database: process.env.DB,
    host: process.env.ENDPOINT,
    dialect: 'postgres'
});


sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });




//schema
const Users = sequelize.define('users', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    age: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false
    }
})



// Cart.sync({force: true}).then(() => {
//     return Cart.create({
//       menu: {
//         item1: 'falafal',
//         item2: 'gyro'
//       }
//     })
// }).then(() => {
//         Cart.findAll({
//           attribute: ['menu']
//       }).then((cart) => {
//           console.log("menu: ")
//           console.log(cart[0].dataValues);
//       })
// })

//Create table. force:true will drop the table if it exists
Users.sync({force: true}).then(() => {
    // Table created
    return Users.create({
      firstName: 'John',
      lastName: 'Hancock',
      age: 23,
      country: 'USA',
      email: 'pvanny1124@gmail.com',
      username: 'patrickv',
      password: 'swaggy1124'
    }).then(user => {
      console.log(typeof(user));
    });
  }).then(() => {
    return Users.findAll({
      attributes: ['firstName', ['lastName', 'last'], "country"],
      where: { country: 'USA'},
  }).then((user) => {
      console.log(user[0].dataValues);
  })
  });







// Users.update({
//         portfolio: {
//               aapl: {
//                 shares: 5
//               },
//               amd: {
//                 shares: 4
//               }
//             },
//           cash: 100000
//          },
//          {
//            where: {id: 1},
//            returning: true,
//            raw: true
//          }
//       ).then(user => {
//         console.log(user[1][0]);
//       })

  

  module.exports = Users;