import styles from './Tarefa.module.css';
import circulo from '../assets/ciculo.svg';
import circuloativado from '../assets/circuloativado.svg';
import {TbTrash} from 'react-icons/tb';
import { ITarefas } from '../App';

interface Props {
  tarefa: ITarefas;
  onDelete: (tarefaId: string) => void;
}



export function Tarefa({tarefa, onDelete}: Props){
  
  return (
    <div className={styles.tarefa}>
      <button><img src={circulo}></img></button>
      <p>
        {tarefa.title}
      </p>
      <button onClick={()=> onDelete(tarefa.id)}>
        <TbTrash size={20}/>
      </button>
    </div>

  )
}