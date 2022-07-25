import styles from './Header.module.css';
import logo from '../assets/Logo.svg';

import {AiOutlinePlusCircle} from 'react-icons/ai';

export function Header (){
  return (
   <header className={styles.header}>

      <img src={logo}/>

      <form className={styles.novoFormulario}>
        <input placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <AiOutlinePlusCircle size={20}/>
        </button>
      </form>
   
   </header>
  )
}