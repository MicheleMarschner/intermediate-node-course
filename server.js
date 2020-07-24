const express= require('express');
const mongoose= require('mongoose');
const port=8000;


//The first line makes our User model available to use in express routes. 
//The second line connects us to a local mongoDB database called: userData.
const User=require('./models/User');
mongoose.connect('mongodb://localhost/userData')

const app= express();

app.use(express.json());


// CREATE
app.post('/users',(req,res)=>{
  // User.create()
})

app.route('/users/:id')
// READ
.get((req,res)=>{
  // User.findById()
})
// UPDATE
.put((req,res)=>{
  // User.findByIdAndUpdate()
})
// DELETE
.delete((req,res)=>{
  // User.findByIdAndDelete()
})


app.listen(port, ()=>{
	console.log(`server is listening on port:${port}`)
})