import styles from './Header.module.css';
import logo from '../assets/Logo.svg';

export function Header (){
  return (
   <header className={styles.header}>

      <img src={logo}/>

      <form className={styles.novoFormulario}>
        <input placeholder="Adicione uma nova tarefa" />
        <button>Criar</button>
      </form>
   
   </header>
  )
}