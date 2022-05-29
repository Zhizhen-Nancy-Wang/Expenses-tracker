
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Layout from '../../components/layout/Layout'
import { postUser } from '../../helpers/axiosHelper'

export const Register = () => {
  const [form,setForm]= useState({})


const handleOnChange=(e)=>{
  const {name,value}=e.target;
  setForm ({...form,
  [name]:value})
}

const handleOnSubmit=async(e)=>{
e.preventDefault();
const result = await postUser(form)
console.log(result, "call api to send this data to the server")

}

  return (
    <Layout>
      <div className='center'>

      <Form onSubmit={handleOnSubmit}>
          <Form.Group className="mb-3" controlId="formGroupEmail" >
            <Form.Label>Name</Form.Label>
            <Form.Control t onChange={handleOnChange}ype="text" name="name" placeholder="Enter your name" required/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupEmail" >
          <Form.Label>Email address</Form.Label>
            <Form.Control onChange={handleOnChange} type="email" name="email" placeholder="Enter email" required/>
        </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword" >
          <Form.Label>Password</Form.Label>
            <Form.Control onChange={handleOnChange} type="password" name="password" placeholder="Password" required/>
        </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword" >
           <Button variant="primary" type="submit" size="sm" >Register</Button>
          </Form.Group>
      </Form>

      </div>
    </Layout>
  )
}
