import React, { useReducer } from 'react';
import './Input.css'

const formReducer = (state, event) => {
  return {
    ...state,
    [event.name]: event.value
    
  }
  
}

function Input() {
  const [user, setUser] = useReducer(formReducer, {});
  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://174.138.103.233/api/employees", {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(user)
    })
  }


  const handleChange = event => {
    setUser({
      name: event.target.name,
      value: event.target.value,
    });
  }
  
  return (
      <h2>Online Registration</h2>
      <Form className="form d-flex flex-column align-items-center bg-info" onSubmit={handleSubmit}>
      <h3>Registration Form</h3>
        <Form className="form-group">
         
          <Form.Control name="firstName" onChange={handleChange} type="text" placeholder="Enter First Name" />
     
          <Form.Label>Last Name</Form.Label>
          <Form.Control name="lastName" onChange={handleChange} type="text" placeholder="Enter Last Name" />
      
       
          <Form.Label>Gender</Form.Label>
          <Form.Control name="gender" onChange={handleChange} type="text" placeholder="Enter Gender" />
    
          <Form.Label>Birthday</Form.Label>
          <Form.Control name="birthday" onChange={handleChange} type="date" />
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter email" />
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" onChange={handleChange} type="password" placeholder="Password" />
          <Form.Label>About</Form.Label>
          <Form.Control name="about" onChange={handleChange} type="text" placeholder="About" />
        <e Button variant="warning" type="submit">
          Submit
  </Button>
      </Form>

  )
}

export default Input;