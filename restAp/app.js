const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const users = require('./MOCK_DATA.json');

// const fs = require('fs');
const userRouter = require('./routes/userRouter');
const usrG = require('./routes/user')
// const { default: mongoose } = require('mongoose');
const {connectMDb} = require("./connection");
const {logReqRes} = require('./middlewares')

const app = express();
const port = 8081;

//conncetion
connectMDb('mongodb://127.0.0.1:27017/one-app')
.then(()=>{
    console.log('MongoDb connected')
})
.catch(err=>console.log(err))

app.use(express.urlencoded({ extended: false }))

app.use(logReqRes('log.txt'))





app.use('/api/users', userRouter);
app.use('/users',usrG );


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});