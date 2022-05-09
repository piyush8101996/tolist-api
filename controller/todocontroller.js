const Todolist = require("../model/todo")


//get all todolist
const todo_all = async (req, res) => {
    try {
        const todo = await Todolist.find()
        res.send(todo)
    }
    catch (err) {
        res.send({ msg: err })
    }
}

//add todolist
const addtodo = async (req, res) => {
        const todo =  new Todolist ({
            title: req.body.title  
        })
         console.log(req.body.title)
    try{
        const todosave= await todo.save()
        console.log(todo);
     res.status(200).send(todosave)
    
    }
     
    catch (err) {
        console.log(err);
       res.status(400).send(err.message)
    }
}


//find singletodolist

const list=async(req,res)=>{
    try{
        const list = await Todolist.find({})
           console.log(list)
        res.send(list)
    }
    catch(err){
        
    }
}

//update the todolist
const updateTodo=async (req,res)=>{
    try{
        const update=await Todolist.updateOne({title:"xiomi"},{$set:{title:req.body.title}})
        res.send(update)
    }
    catch(err){

    }
}


//delete the todolist

const deleteTodo= async(req,res)=>{
    try{
          const Delete = await Todolist.deleteOne({title:req.body.title})
          res.send(Delete)
    }
    catch (err){
           console.log(err)
    }
}
module.exports = {addtodo,list,todo_all,updateTodo,deleteTodo}