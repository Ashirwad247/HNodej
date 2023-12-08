const mongoose = require('mongoose')

async function connectMDb(url){
    return mongoose.connect(url)
}

// mongoose.connect(')
//     .then(() => console.log('mongodb connected'))
//     .catch((err) => console.log("mongo error ", err))

module.exports = {
    connectMDb,
};


