import express from "express"
import { createTransaction, deleteTransactions, findTransaction, findTransactions } from "../modules/transaction/Transaction.model.js";
const router = express.Router();

router.get("/", async(req,res)=>{

try {
  const {authorization}=req.headers;
  
  const filter ={userId: authorization}
  const result = await findTransactions()
   res.json({
    status:"success",
    message: "Transaction List",
    result,
  })
} catch (error) {
  res.json({
    status:"error",
    message: error.message
  })
}


})
router.post("/",async(req,res)=>{
  try {
    console.log(req.body)
    const result = await createTransaction(req.body)

    result?._id ? res.json({
      status:"success",
      message:"still need to add to database"})
      :
      res.json({
      status:"error",
      message: error.message
    })
  } catch (error) {
    res.json({
      status:"error",
      message: error.message
    })
  }
})

router.delete("/",async(req,res)=>{
  try {
    const ids =req.body;
    const {authorization} =req.headers;
    const result = await deleteTransactions(ids, authorization)
    console.log(result)

    result?.deletedCount ? 
    res.json({
      status:"success",
      message:"selected transactions have been deleted"})
      :
      res.json({
      status:"error",
      message: "unable to deleted, please try again"
    })
  } catch (error) {
    res.json({
      status:"error",
      message: error.message
    })
  }
})

router.get("/",(req,res)=>{})

export default router