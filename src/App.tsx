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

  function deletarTarefa(tarefaID:string){
    const novaTarefa = tarefas.filter((tarefa)=>tarefa.id !== tarefaID);
    setTarefas(novaTarefa);

  }

  function toggleTarefaCompleta (tarefaId: string){
    const newTarefas = tarefas.map(tarefa =>{
      if(tarefa.id === tarefaId){
        return {
          ...tarefa,
          isComplete: !tarefa.isComplete,
        }
      }
      return tarefa;
    });
    setTarefas(newTarefas);
  }

  return (
    < >
    <Header onAdicionarTarefa={adicionarTarefa}/>
    <Tarefas tarefas={tarefas} onDelete={deletarTarefa} onComplete={toggleTarefaCompleta}/>         
    </>
  )
}

export default App
