import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for React Router
import background1 from "../Images/dark.avif"
import background2 from "../Images/dark.avif"


 


import axios from "axios";
import toast from 'react-hot-toast';
const SignupForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(background1);
   const navigate  = useNavigate();
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e) =>{
    setName(e.target.value);
  }

   const handleSubmit = async (e) => {
    e.preventDefault();

   try {
      const response = await axios.post('http://localhost:4000/my/user/signup', {
        email,
        name,
        password,
      });

      // Assuming your backend returns a message upon successful signup
      const message = response.data.message;
      console.log('Signup message:', message);
         
    
      // Redirect to login page after successful signup
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error);
      if(error.response && error.response.data && error.response.data.message)
      {
        toast.error(error.response.data.message)
      }
      else if (error.response && error.response.status === 400) {
        toast.error('Email is already registered');
      }
      else{
        toast.error('an error occured during signup')
      }
    }
  };
  useEffect(() => {
    // Change background image after 2-3 seconds
    const intervalId = setInterval(() => {
      setBackgroundImage((backgroundImage) =>
      backgroundImage === background1 ? background2 : background1
      );
    }, 1000000); // Change the interval time as needed (in milliseconds)

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex  justify-end items-center h-screen">
      {/* <img src = {backgroundImage}  className= '   w-full h-full'/> */}
      <form className="   absolute p-8  h-full shadow-lg shadow-current      w-1/4  ">
        <div className='mt-16'>
        <h2 className="text-3xl font-bold mb-6 text-center  text-pink-500">SignUp</h2>

        <div className="mb-4">
          <label className="block  text-pink-400 -sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border border-pink-300 rounded bg-pink-200 focus:outline-none focus:border-pink-500"
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-pink-400 text-sm font-semibold mb-2" htmlFor="password">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border border-pink-300 bg-pink-200 rounded focus:outline-none focus:border-pink-500"
            type="name"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-pink-400 text-sm font-semibold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="w-full px-3 py-2 border border-pink-300 bg-pink-200 rounded focus:outline-none focus:border-pink-500"
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>

        <div className="mb-4 flex justify-end mr-1">
          <Link to="/login" className="text-sm text-pink-400 hover:underline">
            Login
          </Link>
          
        </div>

        <button
          className="w-full bg-pink-400 text-white py-2 rounded hover:bg-pink-500 focus:outline-none"
          type="submit"
          onClick={handleSubmit}
        >
         SignUp
        </button>
        </div>
      </form>
      
    </div>
  );
};

export default SignupForm;