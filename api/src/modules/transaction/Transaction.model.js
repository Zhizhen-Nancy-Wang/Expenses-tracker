import TransactionSchema from "./Transaction.schema.js";

//create a new user in the table
export const createTransaction= newTransactionObj=>{
  
  return TransactionSchema(newTransactionObj).save()
}

export const findTransaction = filter => {
  return TransactionSchema.findOne (filter)
}

export const findTransactions = filter => {
  return TransactionSchema.find(filter)
}
//delete transactions 
export const deleteTransactions = (ids, userId)=>{
  return TransactionSchema.deleteMany({ 
    _id:{$in:ids},userId
  })
}