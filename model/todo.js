const mongoose=require('mongoose')



//Created todo schema

const todolist= new mongoose.Schema({
    title:{type:String,require }
    
})

//creation of collection of name -produt

module.exports=mongoose.model("Lists",todolist);