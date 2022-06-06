import axios from "axios";

const rootUrl = process.env.NODE_ENV === "production"? "/api/v1":"http://localhost:8000/api/v1";

const userEP = rootUrl + "/users";
const transactionEp = rootUrl + "/transactions";

//create user
export const postUser = async userObj => {
  try {
    const {data} = await axios.post(userEP, userObj)
   return data
  }catch (error){
    return {
    status:"error",
    message: error.message
    }}
}
//login user
export const loginUser = async userObj => {
  try {
    const {data} = await axios.post(userEP +"/login", userObj)
   return data
  }catch (error){
    return {
    status:"error",
    message: error.message
    }}
}
//transaction apis
export const postTransaction = async transObj => {
  try {
  const {data} = await axios.post(transactionEp, transObj)
   return data

  }catch (error){
    return {
    status:"error",
    message: error.message
    }}
}

//get transaction associated with a user
export const getTransactions = async transObj => {
  try {
  const {_id} =JSON.parse(window.sessionStorage.getItem('user'))
  const {data} = await axios.get(transactionEp, {
  headers:{
  Authorization :_id,
},
  });
   return data;

  }catch (error){
    return {
    status:"error",
    message: error.message
    }}
}

//delete transactions
export const deleteTransactions = async (ids) => {
  try {
  const {_id} =JSON.parse(window.sessionStorage.getItem('user'));
  const {data} = await axios.delete(transactionEp, {
  headers:{
  Authorization :_id,
},
    data:ids,
  });
   return data;
  }catch (error){
    return {
    status:"error",
    message: error.message,
    };
  }
}

