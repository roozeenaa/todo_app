import React, { useState } from 'react'
import "./TodoForm.css"

const TodoForm = ({addTodo}) => {
    const [todo,setTodo]=useState("")
    // const [todo1,setTodo1]=useState("")
    // const [todo2,setTodo2]=useState("")
    // const [todo3,setTodo3]=useState("")
    // console.log(todo)
    const SubmitForm=(e)=>{
        e.preventDefault()
        addTodo(todo)
        setTodo("")
    }
  return (
    <div>
        <form onSubmit={SubmitForm}>
<br/><input type="text" placeholder="Enter First Name" className="" value={todo} onChange={(e)=>setTodo(e.target.value)}/><br/>
{/* <br/><input type="text" placeholder="Enter Last Name" className="" value={todo1} onChange={(e)=>setTodo1(e.target.value)}/><br/>
<br/><input type="text" placeholder="Enter Email" className="" value={todo2} onChange={(e)=>setTodo2(e.target.value)}/><br/> */}
{/* <br/><input type="number" placeholder="Enter Phone Number" className="" value={todo3} onChange={(e)=>setTodo3(e.target.value)}/><br/> */}
<br/><button type="Submit">Submit</button>
        </form>
        </div>
  )
}

export default TodoForm