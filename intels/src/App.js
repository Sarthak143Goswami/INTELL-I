import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import SignUp from './Auth/Signup.jsx';
import Login from './Auth/LoginForm.jsx';
import AuthContextProvider from './context/AuthContext';
import Contact from './Pages/Contact.jsx';
import RealTimeUpdates from './Components/RealTimeUpdates.jsx';
import Bharat from './Pages/Bharat.jsx';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>

    <div>
      <Toaster position='top-right'
      toastOptions={{
        success :{
          theme:{
            primary : "#4aed88"
          },
        },
      }}>

      </Toaster>
    </div>
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path = "/Login" element = {<Login/>}/>
          <Route path = "/signup" element = {<SignUp/>}/>
          <Route path = "/contact" element = {<Contact/>}/>
          <Route path = "/bharat" element = {<Bharat/>}/>
        </Routes>
        
        

      </AuthContextProvider>
    </Router>
    </>
  );
}

export default App;
