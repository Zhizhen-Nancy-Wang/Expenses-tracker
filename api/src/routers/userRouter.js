import express from "express";
import { createTable } from "../modules/user/User.model.js";
const router =express.Router();

router.post("/",async(req,res)=>{

  try { 
    // send data to db query
    const result = await createTable(req.body)

    console.log(result)

    res.json({
      status: "success",
      message: "user created!"
    })

  } catch (error) {
    res.json({
      status: "error",
      message: error.message
    })
}})

export default router;