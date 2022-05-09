
const todocontroller=require("../controller/todocontroller")

const todorouter = require("express").Router()

todorouter.post('/addtodo',todocontroller.addtodo)
todorouter.get('/',todocontroller.list)
todorouter.get('/todolist',todocontroller.todo_all)
todorouter.put('/updatetodo',todocontroller.updateTodo)
todorouter.delete('/deletetodo',todocontroller.deleteTodo)

module.exports=todorouter;
