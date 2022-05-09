const express=require('express')
const app =express()
const dotenv=require("dotenv")
const mongoose=require("mongoose")
const todorouter=require("./routes/todorouter")

dotenv.config()

//database connection using mongoose

mongoose.connect(
    process.env.DB_CONNECT,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => console.log("connected to db")
  );

//built in express middleware 

app.use(express.json())

app.use(express.urlencoded({extended:false}));
//creating middleware routes

app.use('/',todorouter)


app.listen(5000,()=>{
    console.log("connected port 8000")
})

