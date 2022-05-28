import express from "express";
const app =express();
const PORT =process.env.PORT|| 8000;

app.get ("/", (req, res)=>{
  res.send("we will send react app here")
})
app.use(express.json())


//db connection
import createConnection from "./src/config/dbConfig.js"
createConnection()

//load middleWares
import userRouter from "./src/routers/userRouter.js"

app.use("/api/v1/users",userRouter)

app.listen(PORT, (error)=>{
  error && console.log(error);

  console.log(`sever is running on port http://localhost:${PORT}`)
  
})