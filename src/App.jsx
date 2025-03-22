import { useState } from "react";
import Task from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const[tasks, setTasks] = useState([{
    id: 1,
    title: "Estudar programação",
    description: "Estudar programação para se tornar um desenvolvedor full stack.",
    isCompleted: false,
},
{
  id: 2,
  title: "Estudar inglês",
  description: "Estudar programação para se tornar um desenvolvedor full stack.",
  isCompleted: false,
},
{
  id: 3,
  title: "Estudar design",
  description: "Estudar programação para se tornar um desenvolvedor full stack.",
  isCompleted: false,
}
]);

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


  return (
    <div className="w-screen h-screen bg-red-700 flex justify-center p-6">
      <div className="w-[500px] space-y-4"> 
        <h1 className="text-3xl font-extrabold text-center p-4 text-white">Gerenciador de Tarefas</h1>
        <AddTask />
        <Task tasks={tasks} onTaskClick={onTaskClick} deleteOnClick={deleteOnClick}/>
      </div>
    </div>
  );
}

export default App;