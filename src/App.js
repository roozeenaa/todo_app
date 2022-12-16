import React, { useState } from 'react'
import TodoList from './component/TodoList'
import TodoForm from './TodoForm'
import "./App.css"
function  App(){
  const [todoList, setTodoList] = useState([])
  const addTodo = (todo)=>{
    setTodoList([{todo:todo,status:"active"},...todoList])
  }
  console.log(todoList)

  const deleteIt=(todo)=>{
    const newTodoList=todoList.filter((t)=>todo!==t.todo)
    setTodoList(newTodoList)
  }
  const declarecompleted=(todo)=>{
    const newList=todoList.map((t)=>{
      if(t.todo===todo){
        t.status="inactive"

      }
    })
    setTodoList(newList)
  }
    return (
      <div className="mainContainer">
<h1>Todo App</h1>
      
      <TodoForm addTodo={addTodo}/>
      <TodoList todoList={todoList} deleteIt={deleteIt} declarecompleted={declarecompleted} />
      </div>
    )
  
}
export default App;