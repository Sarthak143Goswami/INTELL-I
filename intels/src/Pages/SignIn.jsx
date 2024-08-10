import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

function SignIn() 
{

const history = useNavigate();

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

async function submit(e){
    e.preventDefault();

    try{
        await axios.post("http://localhost:8000/signin",{
            email,password
        })
        .then(res=>{
            if(res.data = "exist"){
                history("/",{state:{id:email}})
            }
            else if(res.data = "notexist"){
                alert("user have not sign up")
            }
        })
        .catch(e => {
            alert("wrong details")
            console.log(e);
        })
    }
    catch(e){
        console.log(e);
    }
}

  return (
    <div>
      <h2>Sign In</h2>
      
      <form action='POST'>
        <input type='email' onChange={(e) => {setEmail(e.target.value)}} placeholder='Email' name='' id=''/>
        <input type='password' onChange={(e) => {setPassword(e.target.value)}} placeholder='Password' name='' id=''/>

        <input type="submit" onClick={submit}/>
      </form>

      <p>OR</p>
      <br/>

      <Link to="/signup">SignUp Page</Link>
    </div>
  );
};

export default SignIn;
