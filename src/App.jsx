import { useState } from "react";
import Task from "./components/Task";
import AddTask from "./components/AddTask";


function App() {
  
  return (
    <div>
      <h1 className="text-red-700">Gerenciador de Tarefas</h1>
      <AddTask />
      <Task />
    </div>
  );
}

export default App;