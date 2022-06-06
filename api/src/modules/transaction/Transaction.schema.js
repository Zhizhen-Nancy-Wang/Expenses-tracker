import mongoose from "mongoose";

const TransactionSchema = new mongoose.Schema({

type:{
  type: String,
  maxLength:[10, 'Name must be less than 10'],
  required: true,
},

title: {
  type: String,
  required: true,
  maxLength: [50, 'Title must be less than 50']
},
amount: {
  type: Number,
  required: true,
},
userId:{
  type: mongoose.Schema.Types.ObjectId,
  ref:'User',
  required: true,
}
},

{
  timestamps:true
})
//we created a new schema called userSchema, and now time to convert that schema into a real table in our database
export default mongoose.model('TransactionSchema', TransactionSchema)//users