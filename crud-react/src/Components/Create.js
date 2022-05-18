import React from "react";
import {Form,Button} from "react-bootstrap"

const Create=(()=>{
    return(
        <div className="createBlock">
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>First Name </Form.Label> <br />
    <Form.Control type="text" placeholder="Enter first name" className="inputBox"/>
    <br />
    
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Last Name </Form.Label> <br />
    <Form.Control type="text" placeholder="Enter last name" className="inputBox"/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="I agree to terms and conditions" />
  </Form.Group>
  <Button variant="primary" type="submit" className="submitBtn">
    Submit
  </Button>
</Form>

        </div>
    )
})
export default Create