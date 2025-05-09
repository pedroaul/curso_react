import { useState } from "react";
import Input from "./Input";

function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
        <Input type="text" placeholder="Digite o título da tarefa"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        />
        <Input type="text" placeholder="Digite a descrição da tarefa"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        />
        <button onClick={() => {
                if(!title.trim() || !description.trim()) {
                    return alert ("Preencha o titulo e a descrição da tarefa.");
                }
                onAddTaskSubmit(title, description);
                setTitle("");
                setDescription("");
            }
        } className="bg-red-700 p-2 text-white rounded-md font-medium cursor-pointer">Adicionar</button>
    </div>
    );
}

export default AddTask;