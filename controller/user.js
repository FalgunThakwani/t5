const userModel = require('../model/user');
const responseModel=require('../model/response');

const response = {
  message:"",
  success:false,
  users: []
}

function getUser(req, res) {
  response.message="Users retrieved";
  response.success=true;
  response.users=userModel.getUser()
  res.json(response);
}

function getUserById(req,res){
  const {id} = req.params;
  if(!id || id===""){
    return res.status(400).json({ message: 'Id is required',success:false });
  }else{
   const user = userModel.getUserById(id);
   if(!user || user ==null){
    return res.json({message:'No user found with given id',success:false})
   }else{
    return res.json({success:true,user:user})
   }
  }
}

function updateUser(req, res) {
  const { id } = req.params;
  const { email, firstName } = body;
  if (!email || email==="") {
    return res.status(400).json({ message: 'Email is required',success:false });
  }else{
    userModel.updateUser(id,req.body);
    res.json({message:'User updated',success:'true'})
  }
}

function addUser(req,res) {
  const {email,firstName} = req.body;
  if (!email || email==="") {
    return res.status(400).json({ message: 'Email is required',success:false });
  }if(!firstName || firstName===""){
    return res.status(400).json({ message: 'First name is required',success:false });
  }else{
    userModel.addUser(email,firstName);
    res.json({message:"User added",success:"true"})
  }
}

module.exports = {
  getUser,
  updateUser,
  addUser,
  getUserById
};