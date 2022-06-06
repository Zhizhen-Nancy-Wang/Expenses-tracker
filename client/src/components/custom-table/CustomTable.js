import React,{useEffect, useState} from 'react'
import { Alert, Button, Form, Table } from 'react-bootstrap'
import { deleteTransactions, getTransactions } from '../../helpers/axiosHelper'

export const CustomTable = (form) => {
  console.log(form)
  const [transactions, setTransaction]=useState([]);
  const [ids, setIds]=useState([]);
  const [resp,setResp]=useState({});

  useEffect(()=>{
    //call function to call api to fetch all the transactions
    fetchTransactions();
  },[]);

    const fetchTransactions = async ()=>{
      //lets call axios to fetch all the transactions
    const data = await getTransactions();
    if (data.status==="success"){
    setTransaction(data.result)
}
}

const handleOnCheck =e =>{
  const {checked, value} =e.target;
  if (checked){
//add id
setIds([...ids, value])
  }else{
//remove id
const filterIds = ids.filter((id)=>id !== value)
setIds(filterIds)
}
}

const handleOnDelete = async()=>{
  //calls api to delete the selected transactions

  if (
    !window.confirm (
      `Are you sure to delete ${ids.length} transactions?`))
    return;

    //call api
    const  result = await deleteTransactions(ids);
    result.status ==="success"&& fetchTransactions()&&
    setIds([]);
    setResp(result);
    // alert (result.message)
};



const balance = transactions.reduce((acc, curr)=>{
  return curr.type ==="income" ? (acc + curr.amount) : (acc - curr.amount);
}, 0 );

return (
    <div className="mt-5">
      {transactions?.length} transactions found!
  <Table striped hover>
  <thead>
    <tr>
      <th>#</th>
       <th>Date</th>
      <th>Title</th>
      <th>Expenses</th>
      <th>Income</th>
    </tr>
  </thead>

  <tbody>

  {
  transactions?.map( (trans, i) => {
    return(
     <tr key ={trans._id}>

      <td>
        <Form.Check onChange={handleOnCheck} value ={trans._id}/>
      </td>

      <td>{new Date(trans.createdAt).toLocaleDateString()}</td>
      <td>{trans.title}</td>

       {trans.type === "income" ? 
       (<> 
       <td></td>
      <td><span className='text-success fw-bolder'> ${trans.amount}</span></td>
      </>)
       : 
       (<>
       <td><span className='text-danger fw-bolder'> - ${trans.amount}</span></td>
       <td></td>
       </>)
       }
    </tr>)
  })
  }

  <tr>
    <td colSpan={5} className="text-end"> Balance $ {balance}</td>
  </tr>
    
  </tbody>
  </Table>

{resp.message && (
  <Alert variant={resp.status==="success"?"success":"danger"}>
    {resp.message}
  </Alert>
)}
  {ids?.length > 0 && (
  <Button variant="danger" className="mb-5" onClick={handleOnDelete}>
    Delete {ids.length} selected transactions 
  </Button>)}
  </div>
  )
}
