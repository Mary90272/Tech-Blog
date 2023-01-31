const { User } = require('../models');

const userData = [{
    username: 'maria',
    password: 'project1'

},
{
    username: 'mary90272',
    password: 'bootcamp1'
},
{
    username: 'mary',
    password: 'bootcamp2'
},
{
    username: 'unk person',
    password: 'bootcamp3'
},
{
    username: 'Newperson',
    password: '987654321'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;