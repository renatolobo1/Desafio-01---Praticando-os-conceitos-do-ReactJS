import styles from './Tarefa.module.css';
import circulo from '../assets/ciculo.svg';
import circuloativado from '../assets/circuloativado.svg';
import {TbTrash} from 'react-icons/tb';


export function Tarefa(){
  
  return (
    <div className={styles.tarefa}>
      <button><img src={circulo}></img></button>
      <p>
        auhauhahuhua uah uah uahh ahu 
        auhauhauhuha uhahuahu.
      </p>
      <button>
        <TbTrash size={20}/>
      </button>
    </div>

  )
}