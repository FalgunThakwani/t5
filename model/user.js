const { v4: uuidv4 } = require('uuid');
const users = [{
  email: "abc@abc.ca",
  firstName: "ABC",
  id: "5abf6783"
},
{
  email: "xyz@xyz.ca",
  firstName: "XYZ",
  id: "5abf674563"
}];

function getUser() {
  return users;
}

function getUserById(id){
  const user = users.find(user => user.id === id);
}

function updateUser(id, email,firstName) {
  const updatedUsers = users.map(user => {
    if (user.id === id) {
      return { ...user, email, firstName };
    }
    return user;
  });
  users.splice(0, users.length, ...updatedUsers);
}

function addUser(email, firstName) {
  const id = uuidv4();
  const user = { email: email, firstName: firstName, id: id }
  add(user);
}

function add(user) {
  users.push(user);
}

module.exports = {
  getUser,
  add,
  updateUser,
  addUser,
  getUserById
};    