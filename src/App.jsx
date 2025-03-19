import { useState } from "react";
import Task from "./components/Task";
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
  title: "Estudar programação",
  description: "Estudar programação para se tornar um desenvolvedor full stack.",
  isCompleted: false,
},
{
  id: 3,
  title: "Estudar programação",
  description: "Estudar programação para se tornar um desenvolvedor full stack.",
  isCompleted: false,
}
]);

  return (
    <div className="w-screen h-screen bg-blue-300 flex justify-center p-6">
      <div className="w-[500px]"> 
        <h1 className="text-3xl font-bold text-slate-900">Gerenciador de Tarefas</h1>
        <AddTask />
        <Task />
      </div>
    </div>
  );
}

export default App;