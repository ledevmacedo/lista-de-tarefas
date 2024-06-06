export default function NumeroTarefas (){
    return(
        <div className="flex justify-center mt-16  ">
                <h4 className="text-sky text-sm font-bold ">Tarefas criadas</h4>
                <button className="bg-gray-400 text-white mr-96 ml-3 w-6 rounded-full">0</button> 
            <div>
                <div className="flex">
                    <h4 className="text-purple text-sm font-bold " >Concluídas</h4> 
                    <button className="bg-gray-400 text-white ml-3 w-6 rounded-full ">0</button>
                </div>
            </div>
        </div>
    )
}