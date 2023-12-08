const User = require('../models/user')

async function handleGetAllUsers(req, res) {
    const all = await User.find({})
    return res.json(all);
}

async function getUserById(req, res) {
    // const id = Number(req.params.id);
    const user = await User.findById(req.params.id)
    //id is string so change to 
    // const user = users.find(user => user.id === id);
    res.json(user)
}

async function patchUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id)
    return res.json({ status: "Updated" })
}

async function delUserById(req, res) {
    await User.findByIdAndDelete(req.params.id);

    return res.json({ status: "Success" })
}


async function handleCreateUser(req, res) {
      //todo:create new user
      const body = req.body;
      console.log(body)
      if (!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title) {
          return res.status(400).json({ msg: "All fields are required" })
  
      }
  
      const result = await User.create({
          firstName: body.first_name,
          lastName: body.last_name,
          email: body.email,
          gender: body.gender,
          jobTitle: body.job_title,
      })
  
      return res.status(201).json({ msg: "Successfully created", id:result._id })
}

module.exports = { handleGetAllUsers, getUserById, patchUserById, delUserById, handleCreateUser }