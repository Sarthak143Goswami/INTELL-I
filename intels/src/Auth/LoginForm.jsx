import React, { useContext, useEffect, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom'; // Import Link for React Router
import background1 from "../Images/dark.avif"


import toast from 'react-hot-toast'; 
import axios from "axios"
import { UserContext } from './UserContext';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [backgroundImage, setBackgroundImage] = useState(background1);
  const [loadedFromLocalStorage, setLoadedFromLocalStorage] = useState(false);
  const { loginUser } = useContext(UserContext);
   
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const navigate = useNavigate();
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/my/user/login', { email, password });
      const { token, name: UserName, email: UserEmail } = response.data;
      const userData = { token, UserName, UserEmail };
      loginUser(userData);
      localStorage.setItem('userData', JSON.stringify(userData));
      console.log('Stored user data:', userData);
      toast.success('Successfully logged in');
      navigate('/');
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    if (storedUserData && !loadedFromLocalStorage) {
      const userData = JSON.parse(storedUserData);
      loginUser(userData);
      setLoadedFromLocalStorage(true); // Set loadedFromLocalStorage to true once user data is loaded
    }
    console.log(storedUserData);

    const intervalId = setInterval(() => {
      setBackgroundImage((prevImage) => (prevImage === background1 ? background1 : background1));
    }, 1000000);

    
  }, [loadedFromLocalStorage, loginUser]);


  return (
    <div className="flex  justify-end items-center h-screen">
      <img src = {backgroundImage}  className= '   w-full h-full'/>
      <form className="   absolute p-8  shadow-current shadow-lg h-full w-1/4  ">
        <div className='mt-20'>
        <h2 className="text-3xl font-bold mb-6 text-center  text-pink-500">Login</h2>

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

        <div className="mb-4 flex justify-between">
          <Link to="/signup" className="text-sm text-pink-400 hover:underline">
            Sign Up
          </Link>
          <a className="text-sm text-pink-400 hover:underline" href="#forgot-password">
            Forgot Password?
          </a>
        </div>

        <button
          className="w-full bg-pink-400 text-white py-2 rounded hover:bg-pink-500 focus:outline-none"
          type="submit"
          onClick={handleSubmit}
        >
          Login
        </button>
        </div>
      </form>
      
    </div>
  );
};

export default LoginForm;