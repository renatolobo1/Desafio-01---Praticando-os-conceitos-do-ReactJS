import styles from './Tarefa.module.css';
import circulo from '../assets/ciculo.svg';
import circuloativado from '../assets/circuloativado.svg';
import {TbTrash} from 'react-icons/tb';
import { ITarefas } from '../App';

interface Props {
  tarefa: ITarefas;
}



export function Tarefa({tarefa}: Props){
  
  return (
    <div className={styles.tarefa}>
      <button><img src={circulo}></img></button>
      <p>
        {tarefa.title}
      </p>
      <button>
        <TbTrash size={20}/>
      </button>
    </div>

  )
}