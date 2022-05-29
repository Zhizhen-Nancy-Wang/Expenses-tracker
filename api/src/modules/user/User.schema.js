import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
name :{
  type: String,
  required:true,
  maxLength:[50, 'Name must be less than 50']
},
email: {
  type: String,
  unique:true,
  index:1,
  required: true,
  maxLength: [50, 'Email must be less than 50']
},
password: {
  type: String,
  required: true,
  maxLength: [50, 'Password must be more than 5 characters'],
  minLength: [5, 'Password must be less than 50 characters']
},
},
{
  timestamps:true
})
//we created a new schema called userSchema, and now time to convert that schema into a real table in our database
export default mongoose.model('User', UserSchema)//users