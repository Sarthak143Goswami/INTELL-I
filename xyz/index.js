const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const route = require('./src/Routes')
app.use(cors({
  origin: 'http://localhost:3000', // Update with your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  credentials: true, // Enable credentials (cookies, authorization headers, etc.)
}));

mongoose.connect('mongodb+srv://admin:LdstdSxClAIg3Qsn@food-ordering.nv1uq6n.mongodb.net/?retryWrites=true&w=majority&appName=food-ordering', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.use(express.json()) 
app.use("/my/user" , route);

app.get('/healthy' , (req,res) => {

 res.send('hell0 server')
})

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});