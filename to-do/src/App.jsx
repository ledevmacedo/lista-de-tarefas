import './App.css'
import CrieTarefas from './CrieTarefas'
import Page from './Page'
import NumeroTarefas from './NumeroTarefas'
import Tarefas from './Tarefas'
import { useState } from 'react'

function App() {
  const [atualizar, setAtualizar ] = useState(true)

  return (
  <div>
      <Page atualizar = {setAtualizar} />
      <NumeroTarefas/>
      <CrieTarefas />
      <Tarefas atualizar = {atualizar} setAtualizar = {setAtualizar}  />
  </div>
  )
}

export default App
