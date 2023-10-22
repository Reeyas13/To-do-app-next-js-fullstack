import mongoose from "mongoose";
const connectMongodb = async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("connected to Mongodb")
    } catch (error) {
        console.log(error)
    }

}
module.exports = connectMongodb