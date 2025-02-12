const mongoose = require('mongoose');
require(dotenv).config();

const connectDb = () =>{
    try{
        await mongoose.connect(process.env.MONGO_URL {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDb is connected");
    }
    catch(error){
        console.error("Mongodb is not connected");
    }
}
module.exports = connectDb;