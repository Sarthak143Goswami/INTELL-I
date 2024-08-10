const express = require('express');
const User = require('../models/SignupLoginmodel');
const router = express.Router();
const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt')
const saltRounds = 10;
const jugnuu = "miniprojectkey" 




// Define your routes
const emailRegex = /^\S+@\S+\.\S+$/;
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
router.post('/signup',async (req, res) => {
  
    console.log(req.body);
   const {email , name , password} = req.body;
     if(!emailRegex.test(email))
     {
      return res.status(400).json({message : "please enter a valid email address"});
     }
     if(!passwordRegex.test(password))
     {
      return res.status(400).json({message : "password must contain at least one number one lowercase and one uppercase letter and also 6 characters long"});
     }
  

   try{

    const existingUser = await User.findOne({email});

    if(existingUser)
    {
       return res.status(400).json({message : "email is already registered"})
    }

    //if not present then we will create the new user 
      
        
   const hash = await bcrypt.hash(password, saltRounds);

    const newUser = new User({email , name , password : hash});
   
    await newUser.save();
     
    return res.status(201).json({ name: newUser.name , message : "successfully created" });
   }
   catch(error)
   {
    console.log(error);
    return res.status(500).json({message : "Something went wrong"})
   }
    
});
router.post('/login', async (req, res) => {
         
 
   const{email,password} = req.body;
   try{ 
      const user = await User.findOne({email});

      if (!user) {
         return res.status(400).json({ message: "Invalid credentials" });
     }
         
       const match = await bcrypt.compare(password , user.password)
       
       if(!match)
       {
         return res.status(400).json({message : "invalid credential"});
       }
       
       const token = jwt.sign({ userId: user._id }, jugnuu);
       return res.status(200).json({ token, name : user.name , email : user.email});
             
   }
   catch(error)
   {
      console.log(error);
     return res.status(500).json({message : "something went wrong"})

   }
});

// Export the router
module.exports = router;