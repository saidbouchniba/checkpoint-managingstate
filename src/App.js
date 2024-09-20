import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import Tasklist from './components/Tasklist';
import Taskform from './components/Taskform';

function App() {
  const [tasks,setTasks]=useState([{name:"task1",description:"drink coffee",id:1,iscomplete:false}])
  const [editing,setediting]=useState(null)

const addtask=(data)=>{
setTasks([...tasks,data])
}
const deletetask=(id)=>{
  setTasks(tasks.filter(task=>task.id!=id))
}
const edittask=(data,id)=>{
setTasks(tasks.map(task=>task.id===id?task=data:task))

}
const markcomplete=(id)=>{
  setTasks(tasks.map(task=>task.id===id?task={...task,iscomplete:!task.iscomplete}:task))
  
  }
  return (
    <div className="App" style={{textAlign:"center"}}>
      <h1 >TODO APP</h1>
      <Taskform addtask={addtask}  edittask={edittask} editing={editing} />
      <Tasklist deletetask={deletetask} tasks={tasks} edittask={edittask} setediting={setediting} markcomplete={markcomplete}/>
      
    </div>
  );
}

export default App;
