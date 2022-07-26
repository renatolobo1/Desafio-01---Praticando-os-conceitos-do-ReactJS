import { useState } from "react"
import { Header } from "./components/Header"
import { Tarefas } from "./components/Tarefas"

export interface ITarefas {
  id: string;
  title: string;
  isComplete: boolean;
}


function App() {
  const [tarefas, setTarefas] = useState<ITarefas[]>([
    {
      id:'teste',
      title:'test',
      isComplete: true,
    },
    {
      id:'teste2',
      title:'renato',
      isComplete: false,
    }
  ]);

  function adicionarTarefa(tarefaTitulo:string){
    setTarefas([
      ...tarefas,
      {
        id: crypto.randomUUID(),
        title: tarefaTitulo,
        isComplete: false,
        
      }
    ]);
  }

  return (
    < >
    <Header onAdicionarTarefa={adicionarTarefa}/>
    <Tarefas tarefas={tarefas}/>         
    </>
  )
}

export default App
