import { useState } from "react"
import Logo from "./img/Logo.png"


export default function TodoTop() {
    const [inputText, setInputText] = useState('')

    console.log(inputText)
    function handleNewTodo() {
        if (!localStorage.getItem('tarefas')) {
            localStorage.setItem('tarefas', JSON.stringify([]));
        }
        const localTarefas = JSON.parse(localStorage.getItem('tarefas') || '[]');

        const todoData = {
            id: '',
            item: inputText
        }
        localTarefas.push(todoData);

        localStorage.setItem('tarefas', JSON.stringify(localTarefas))
    }
    return (
        <div className="flex flex-col justify-center items-center bg-gray-700 h-52">
            <img className="mt-20 " src={Logo} alt="logo" />
            <div className="mt-12 flex justify-center ">
                <input className="w-screen max-w-2xl h-12 px-6 rounded-lg bg-gray-400 shadow-2xl text-white"
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Adicione uma nova tarefa" />

                <h1 className="text-4xl text-red-500">
                    {inputText}
                </h1>
                <button onClick={handleNewTodo} className=" ml-5 h-12 w-16 rounded-lg bg-blue text-white shadow-2xl"> Criar </button>
            </div>
        </div>
    )
}
