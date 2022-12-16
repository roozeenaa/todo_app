import React from 'react'
import "./Todo.css"

const Todo = ({t,deleteIt,declarecompleted})=>{



  const changeStatus = (e)=>{
    e.preventDefault()
    declarecompleted(t.todo)

  }
  const deleteTodo=(e)=>{
    deleteIt(t.todo)

  }
  return (
    <div className='container'>
      
     <div>
  {t.todo}
      </div> 
      <div>

  <button className="button" type="Submit" onClick={changeStatus}>✔️</button>
  <button className="button" type="Submit" onClick={deleteTodo}>❌</button>
      </div>
  </div>
  )
}

export default Todo
  
