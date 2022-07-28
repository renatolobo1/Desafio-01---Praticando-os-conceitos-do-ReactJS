import { TbClipboardText } from 'react-icons/tb';
import {ITarefas} from '../App';
import { Tarefa } from './Tarefa';
import styles from './Tarefas.module.css';

interface Props {
  tarefas: ITarefas[];
  onDelete: (tarefaId: string) => void;
  onComplete: (tarefaId: string) => void;
}

export function Tarefas ({ tarefas, onDelete, onComplete }: Props) {
  const tarefasQuantidade = tarefas.length;
  const tarefasCompletadas = tarefas.filter((tarefas) => tarefas.isComplete).length;

  return (
    <section className={styles.tarefas}>
      <header className={styles.header} >
        <div>
          <p> Tarefas Criadas</p>
          <span>{tarefasQuantidade}</span>
        </div>
        <div>
          <p className={styles.textoRoxo}> Concluidas</p>
          <span>{tarefasCompletadas} de {tarefasQuantidade}</span>
        </div>
      </header>

      <div className={styles.lista}>
        {tarefas.map((tarefa) =>(
          <Tarefa 
            key={tarefa.id} 
            tarefa={tarefa} 
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
        {tarefas.length <=0 &&(
          <section className={styles.vazio}>
            <div>
              <TbClipboardText size={50}/>
              <p>Você ainda não tem tarefas cadastradas </p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
     
      </div>
    </section>
  )
}