import './App.css'
import CrieTarefas from './CrieTarefas'
import Page from './todoTop'
import NumeroTarefas from './NumeroTarefas'
import Tarefas from './Tarefas'

function App() {
  return (
    <div>
      <Page />
      <NumeroTarefas />
      <CrieTarefas />
      <Tarefas />
    </div>
  )
}

export default App
