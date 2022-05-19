import React, { useState } from "react";
import {Form,Button} from "react-bootstrap"
import axios from "axios"
import {useNavigate} from "react-router"
const Create=(()=>{
  let history=useNavigate()
  const [firstname,setFirstname]=useState('')
  const [lastname,setLastname]=useState('')
  const sendDataToAPI=((e)=>{
    e.preventDefault()
    axios.post("https://6285143e3060bbd3474446ba.mockapi.io/fakeAPIdata",{firstname,lastname}).then(()=>{
      history('/read')
    })
    //console.log(firstname,lastname)
  })
    return(
        <div className="createBlock">
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name </Form.Label> <br />
    <Form.Control type="text" placeholder="Enter first name" className="inputBox" onChange={(e)=>setFirstname(e.target.value)}/>
    <br />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Last Name </Form.Label> <br />
    <Form.Control type="text" placeholder="Enter last name" className="inputBox" onChange={(e)=>setLastname(e.target.value)}/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I agree to terms and conditions" />
  </Form.Group>
  <Button variant="primary" type="submit" className="submitBtn" onClick={sendDataToAPI}>
    Submit
  </Button>
</Form>

        </div>
    )
})
export default Create