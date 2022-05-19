import React, { useEffect, useState } from "react";
import axios from "axios"
import {Form,Button} from "react-bootstrap"
import {useNavigate} from "react-router"

const Update = (()=>{
    let history = useNavigate()
    const [firstname,setFirstname]=useState('')
    const [lastname,setLastname]=useState('')
    const [id,setId]=useState('')
    useEffect(()=>{
        setFirstname(localStorage.getItem('Firstname'))
        setLastname(localStorage.getItem('Lastname'))
        setId(localStorage.getItem('Id'))
    },[])
    const sendDataToAPI=((e)=>{
        e.preventDefault()
        axios.put(`https://6285143e3060bbd3474446ba.mockapi.io/fakeAPIdata/${id}`,{firstname,lastname}).then(()=>{
            history('/read')
        })
      })
    return(
        <div className="createBlock">
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name </Form.Label> <br />
    <Form.Control type="text" placeholder="Enter first name" className="inputBox" onChange={(e)=>setFirstname(e.target.value)} value={firstname}/>
    <br />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Last Name </Form.Label> <br />
    <Form.Control type="text" placeholder="Enter last name" className="inputBox" onChange={(e)=>setLastname(e.target.value)} value={lastname}/>
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
export default Update