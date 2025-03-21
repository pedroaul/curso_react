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

  return (
    <div className="w-screen h-screen bg-blue-300 flex justify-center p-6">
      <div className="w-[500px]"> 
        <h1 className="text-3xl font-bold text-slate-900">Gerenciador de Tarefas</h1>
        <AddTask />
        <Task tasks={tasks} onTaskClick={onTaskClick}/>
      </div>
    </div>
  );
}

export default App;