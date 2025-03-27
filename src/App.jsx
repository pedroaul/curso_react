import { useEffect, useState } from "react";
import Task from "./components/Tasks";
import AddTask from "./components/AddTask";
import {v4} from "uuid";

function App() {
  const[tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

function onTaskClick (taskId) {
  const newTasks = tasks.map(task => {
    if(task.id == taskId) {
      return{...task, isCompleted: !task.isCompleted}
    }
    return task;
  });
  setTasks(newTasks);
}

function deleteOnClick (taskDelId) {
  const delTask = tasks.filter(task => task.id != taskDelId);
  setTasks(delTask);  
  };

function onAddTaskSubmit (title, description) {
  const newTask = {
    id: v4(),
    title,
    description,
    isCompleted: false, 

  };
  setTasks([...tasks, newTask])
}


  return (
    <div className="w-screen h-screen bg-red-700 flex justify-center p-6">
      <div className="w-[500px] space-y-4"> 
        <h1 className="text-3xl font-extrabold text-center p-4 text-white">Gerenciador de Tarefas</h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        <Task tasks={tasks} onTaskClick={onTaskClick} deleteOnClick={deleteOnClick}/>
      </div>
    </div>
  );
}

export default App;