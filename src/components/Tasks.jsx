import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

// QUANDO ALTERO A VARIAVEL, EU PRECISO ALTERAR A INTERFACE, CRIO UM STATE

function Tasks({tasks, onTaskClick, deleteOnClick}) {
    const navigate = useNavigate();
   
    function onSeetDetailsClick(task) {
        const query = new URLSearchParams()
        query.set("title", task.title)
        query.set("description", task.description)
        navigate(`/task?${query.toString()}`);
    }

    return(
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
            {tasks.map((task) => (
                <li key={task.id} className="flex gap-2">
                <button onClick={() => onTaskClick(task.id)} className={`bg-slate-400 p-2 w-full text-left rounded-md text-white font-medium cursor-pointer ${task.isCompleted && 'line-through'}`}>
                    {task.title}
                    {/* {task.isCompleted ? "COMPLETE": "IMCOMPLETE"}  */}
                </button>
                <button onClick={() => onSeetDetailsClick(task)} className="bg-slate-400 p-2 rounded-md text-white cursor-pointer">
                    <ChevronRightIcon />
                </button>
                <button onClick={() => deleteOnClick(task.id)} className="bg-slate-400 p-2 rounded-md text-white cursor-pointer">
                    <TrashIcon />
                </button>
            </li>
        ))}
        </ul>
    );
}

export default Tasks;