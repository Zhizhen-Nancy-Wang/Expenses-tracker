import React,{useEffect, useState} from 'react'
import Layout from '../../components/layout/Layout'
import { useNavigate } from 'react-router-dom'
import { Alert, Button, Col, Form, Row } from 'react-bootstrap'
import { postTransaction } from '../../helpers/axiosHelper'
import { CustomTable } from '../../components/custom-table/CustomTable'


export const Dashboard = () => {
const [form, setForm]=useState({});
const [resp, setResp]=useState();
const [refetchFlag, setRefetchFlag]=useState(0);

const navigate =useNavigate();

  useEffect(()=>{
    const storedUser = JSON.parse(window.sessionStorage.getItem("user"))
    !storedUser?._id && navigate("/")
  },[])

  const handleOnChange=(e)=>{
    const {name,value} =e.target
    setForm({
    ...form,
    [name]:value
  });
  };

  const handleOnSubmit= async(e)=>{
  e.preventDefault();

  const {_id} = JSON.parse(window.sessionStorage.getItem("user"));

  if (!_id){
    return alert ("Please login first");
  };

  const result = await postTransaction({...form, userId:_id});
  console.log(result);
  setResp(result);
  if (result.status==="success"){
    setRefetchFlag(refetchFlag +1)
  }
}

  return (
    <Layout>
      <Form className="mt-5" onSubmit={handleOnSubmit} >
      {resp?.message && 
      <Alert variant={resp?.status==="success"?"success":"danger"}>{resp?.message}</Alert>
      }
       <Row className="g-2">

      <Col md="2">
        <Form.Select name="type" required onChange={handleOnChange}>
           <option   > Choose...</option>
           <option value="income" >Income</option>
           <option value="expenses" >Expenses</option>
        </Form.Select>
      </Col>

       <Col md="6"> 
        <Form.Control 
        onChange={handleOnChange}
        name="title" 
        placeholder="Transaction title" 
        required/>
       </Col>

      <Col md="2">
        <Form.Control 
        onChange={handleOnChange}
        name="amount" 
        type="number"
        placeholder="50" 
        required/>
      </Col>

      <Col md="2">
       <Button 
       variant="primary" 
       type ="submit" 
       className="form-control">Add</Button>
      </Col>

     </Row>
    </Form>

    <Row >
     <CustomTable key ={refetchFlag}/>
    </Row>

    </Layout>
  )
}

