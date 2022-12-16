import Todo from "./Todo";
import "./TodoList.css" 

function App({todoList,deleteIt,declarecompleted}){
  console.log(todoList)
  return(
    <div className="App"> 
     {
     todoList.map(function(t,i) {
return (<div key={i} style={{margin:"10px",padding:"10px 5px", borderRadius:"3px"}}>
  <Todo t={t} deleteIt={deleteIt} declarecompleted={declarecompleted}/>
</div>)
})
     }
    </div>
  )
}

export default App;
