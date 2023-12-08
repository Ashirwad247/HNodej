const mongoose = require('mongoose')
mongoose.set("strictQuery", true)
async function connecToMDB(url){
    return mongoose.connect(url);
}

module.exports = {connecToMDB}