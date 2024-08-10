import React from 'react';
import Header from '../Components/Header';
import './pages.css';


const Contact = () => {
  return (
    <div>
      <Header />
      <div className='flex felx-row justify-evenly m-16 '>
        <div className='flex flex-col'>
          <h1 className='cont text-white '>Contact Us</h1>
          <h2 className='cnt text-white text-2xl'>We'd love your input: questions, feature requests, bugs or compliments.</h2><br/>><br/><br/>>
          <p className='text-2xl text-white'>sarthakgoswamiind@gmail.com</p>
        </div>
        <div className="flex flex-col ">
          <input className='p-2 rounded-md  w-96 ' type="text" placeholder='name'/>
          <br />
          <input className='p-2 rounded-md w-96' type="email" placeholder='email'/>
          <br />
          <input className='p-2 rounded-md w-96' type="text" placeholder='Subject'/>
          <br />
          <input className='p-2 rounded-md w-96 h-32' type="text" placeholder='Your Message'/>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Contact;
