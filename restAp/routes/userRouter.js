const express = require('express')

const userRouter = express.Router()
const { handleGetAllUsers, getUserById, patchUserById, delUserById, handleCreateUser } = require('../controllers/user')


// userRouter.get('/', handleGetAllUsers);

// userRouter.get('/:id', getUserById);

// userRouter.patch('/:id', patchUserById);

// userRouter.delete('/:id', delUserById);

// userRouter.post('/', handleCreateUser);

userRouter.route('/').get(handleGetAllUsers)
.post(handleCreateUser);


userRouter.route('/:id').get(getUserById)
.patch(patchUserById)
.delete(delUserById);






module.exports = userRouter;



// app.post('/api/users', (req,res)=>{
//     //todo:create new user
//     const body = req.body
//     console.log(body)
//     // res.json({status:"pending"});
//     users.push({...body, id:users.length + 1});
//     fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data)=>{
//         return res.json({status:"success", id:users.length});
//     });
// });



