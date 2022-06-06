import express from "express";
import { createUser, findUser } from "../modules/user/User.model.js";

const router =express.Router();

//user registration
router.post("/",async(req,res) => {

  try { 
    // send data to db query
    const result = await createUser(req.body)

    console.log(result)

    res.json({
      status: "success",
      message: "user created!"
    })

  } catch (error) {
    let message =error.message
    if (message.includes('E11000 duplicate key error')){
      message="This email is already registered"
    }
    res.json({
      status: "error",
      message
    })
}})

//user login 
router.post("/login",async(req, res)=>{
  try{

    const {email, password} = req.body
    const user = await findUser({email, password})

    if(user?._id){
      user.password =undefined
      return res.json({
        status:"success",
        message:"user login successfully",
        user:user,
      }); 
    }

  res.json({
      status:"error",
      message:"Invalid Credintials"
    })

  }catch(error){
    res.json({
      status:"error",
      message:error.message
    })
  }
})
export default router;