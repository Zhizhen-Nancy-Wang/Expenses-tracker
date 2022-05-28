import mongoose from 'mongoose'

const createConnection =()=>{
  try{
    const connect = mongoose.connect(process.env.MONGO_URL)
    connect && console.log("connected to mongoDB")
  }catch(error){
    console.log(error)
  }
}
export default createConnection;