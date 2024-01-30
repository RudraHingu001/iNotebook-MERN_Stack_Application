const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/test"

async function connectToMongo(){
    await mongoose.connect(mongoURI).then(() => console.log("connected !! ")).catch(err => console.log(err));
} 

module.exports = connectToMongo;