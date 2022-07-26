import styles from './Tarefa.module.css';
import circulo from '../assets/ciculo.svg';
import circuloativado from '../assets/circuloativado.svg';
import {TbTrash} from 'react-icons/tb';
import { ITarefas } from '../App';

interface Props {
  tarefa: ITarefas;
  onDelete: (tarefaId: string) => void;
  onComplete: (tarefaId: string) => void;
}



export function Tarefa({tarefa, onDelete, onComplete}: Props){  
  
  return (
    <div className={styles.tarefa}>
      <button onClick={()=>onComplete(tarefa.id)}>
        {tarefa.isComplete ?<img src={circuloativado}></img>:<img src={circulo}></img>}
      </button>

      <p className={tarefa.isComplete ? styles.textoCompleto: ""}>{tarefa.title}</p>

      <button onClick={()=> onDelete(tarefa.id)}>
        <TbTrash size={20}/>
      </button>
    </div>

  )
}