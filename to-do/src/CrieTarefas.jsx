import { useEffect, useState } from "react"
import Notas from "./img/Notas.png"




export default function CrieTarefas(){
  let tarefa = {
    concluida: false,
    nomeTarefa: "Tarefa 01",
  }

  localStorage.setItem ("tarefa", JSON.stringify(tarefa))

  let getTarefa = localStorage.getItem("tarefa")
  
  console.log(getTarefa)

  const tarefaObject = JSON.parse(getTarefa)


    return(
        <div>
        <div className="flex justify-center mt-4">
            <hr className="w-screen max-w-3xl border-gray-400"/>
        
       
        
        </div>
        <div className="flex justify-center mt-16">
            
        <img className="w-14 h-14" src={Notas} alt="Notas"></img>
        </div>
        <div className="flex justify-center grid mt-4">
            <p className="text-gray-300 text-base font-bold">Você ainda não tem tarefas cadastradas</p>
            <p className="text-gray-300 text-base ml-2">Crie tarefas e organize seus itens a fazer</p>
        
           
        </div>
        </div>
    )
}