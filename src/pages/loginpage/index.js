import React from 'react';
import './style.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Loginpage() {

  const navigateTo = useNavigate()

  const [userData, setUserData] = React.useState({
    name:'',
    pass:''
  })

  const   handleSubmit = (e) => {
e.preventDefault();
    localStorage.setItem('user', JSON.stringify(userData));
    navigateTo('/home');
  }

  const   handleChange = (e) => {
   const name = e.target.name;
   const value = e.target.value;

   setUserData({
    ...userData,
    [name]:value
   })


    
      }

  return (
    <div className='main-container login'>
      <div className='login-container'>
        <h3 >Login To Continue</h3>
        <TextField onChange={handleChange} name = "name" className='user-input' id="standard-basic" 
         variant="standard" placeholder="User Name " />

        <TextField
        onChange={handleChange}
        name = "pass"
          className='user-input'
          id="standard-password-input"
          type="password"
          placeholder="password"
          autoComplete="current-password"
          variant='standard'
        />

        <Button
        onClick = {(e)=> {
          handleSubmit(e)
        }}
          className='btn-input'
          variant="outlined">Login</Button>

      </div>
    </div>
  )
}
