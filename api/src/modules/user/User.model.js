import UserSchema from "./User.schema.js";

//create a new user in the table
export const createTable= newUserObj=>{
  
  return UserSchema(newUserObj).save()
}