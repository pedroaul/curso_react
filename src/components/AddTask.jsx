
function AddTask() {
    return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
        <input type="text" placeholder="Digite o título da tarefa" className="bg-white border-slate-300 outline-slate-400 px-4 py-2 rounded-md"/>
        <input type="text" placeholder="Digite a descrição da tarefa" className="bg-white border-slate-300  outline-slate-400 px-4 py-2 rounded-md" />
        <button className="bg-red-700 p-2 text-white rounded-md font-medium">Adicionar</button>
    </div>
    );
}

export default AddTask;