import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"

function SignUp() 
{

const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

async function submit(e){
    e.preventDefault();

    try{
        await axios.post("http://localhost:8000/signup",{
            email,password
        })
        .then(res=>{
            if(res.data = "exist"){
                alert("user already exist")

                // history("/",{state:{id:email}})
            }
            else if(res.data = "notexist"){
                history("/",{state:{id:email}})
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
      <h2>Sign Up</h2>
      
      <form action='POST'>
        <input type='email' onChange={(e) => {setEmail(e.target.value)}} placeholder='Email' name='' id=''/>
        <input type='password' onChange={(e) => {setPassword(e.target.value)}} placeholder='Password' name='' id=''/>

        <input type="submit" onClick={submit}/>
      </form>

      <p>OR</p>
      <br/>

      <Link to="/signin">Signin Page</Link>
    </div>
  );
};

export default SignUp;
