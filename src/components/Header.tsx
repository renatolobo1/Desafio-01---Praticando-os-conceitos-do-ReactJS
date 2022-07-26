import styles from './Header.module.css';
import logo from '../assets/Logo.svg';

import {AiOutlinePlusCircle} from 'react-icons/ai';
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
  onAdicionarTarefa:(tarefaTitulo: string) => void;
}




export function Header ({onAdicionarTarefa}: Props){
  const [title, setTitle] = useState("");

  function handleSubmit(event: FormEvent){
    event.preventDefault();

    onAdicionarTarefa(title);
    setTitle("");
  }

  function onChangeTitle (event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
   <header className={styles.header}>

      <img src={logo}/>

      <form className={styles.novoFormulario} onSubmit={handleSubmit}>
        <input 
          placeholder="Adicione uma nova tarefa" 
          onChange={onChangeTitle}
          value={title} 
        />
          <button>
            Criar
            <AiOutlinePlusCircle size={20}/>
          </button>
      </form>
   
   </header>
  )
}