import { useState } from "react"
import Logo from "./img/Logo.png"


export default function Page (){

    // let tarefa = {
    //     concluida: false,
    //     nomeTarefa: "Tarefa 01",
    //   }
    
      localStorage.setItem ("tarefa", JSON.stringify(tarefa))
    
      let getTarefa = localStorage.getItem("tarefa") !== null ? tarefa : []
      
    //   console.log(getTarefa)
    
      const tarefaObject = JSON.parse(getTarefa)
    

    // const [textoTarefa, setTextoTarefa] = useState ("Criar +")

    function input (){
        const [inputText, setInputText] = useState ('')
        
        const handleInputChange = (event) => {
        setInputText(event.target.value)
    }
        const handleButtonClick = () => {
        console.log("Tarefa do dia:", inputText)
    }

    }


    // function eventCriar (){
    // setTextoTarefa("Criado! :)")

    // } 

    return(
    
        <div className="flex justify-center items-center grid bg-gray-700 h-52">
                <img className="ml-72 mt-20 " src={Logo} alt="logo" />
            <div className="mt-12  ">   
                <input className="w-screen max-w-2xl h-12 px-6 rounded-lg bg-gray-400 shadow-2xl text-white"
                 type="text" 
                 value={inputText}
                 onChange={handleInputChange}
                 placeholder="Adicione uma nova tarefa" />
                <button onClick={handleButtonClick} className=" ml-5 h-12 w-20 rounded-lg bg-blue text-white shadow-2xl"></button>
                <p>{inputText}</p>
            </div>
        </div>
    )
}