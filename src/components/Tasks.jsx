import { ChevronRightIcon, TrashIcon } from "lucide-react";

// QUANDO ALTERO A VARIAVEL, EU PRECISO ALTERAR A INTERFACE, CRIO UM STATE

function Tasks(props) {
    console.log(props)
    return(
        <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">{props.tasks.map((task) => 
            <li key={task.id} className="flex gap-2">
                <button onClick={() => props.onTaskClick(task.id)} className={`bg-slate-400 p-2 w-full text-left rounded-md text-white ${task.isCompleted && 'line-through'}`}>
                    {task.title}
                    {/* {task.isCompleted ? "COMPLETE": "IMCOMPLETE"}  */}
                </button>
                <button className="bg-slate-400 p-2 rounded-md text-white">
                    <ChevronRightIcon />
                </button>
                <button className="bg-slate-400 p-2 rounded-md text-white">
                    <TrashIcon />
                </button>
            </li>
        )}
        </ul>
    );
}

export default Tasks;