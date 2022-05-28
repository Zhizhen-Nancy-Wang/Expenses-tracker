import express from "express";
const router =express.Router();

router.post("/",(req,res)=>{
  console.log(req.body)
  res.json({
    status:"success",
    message:"user created!"
  })
})
export default router;