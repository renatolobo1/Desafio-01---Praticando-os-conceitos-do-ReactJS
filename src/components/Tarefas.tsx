import { Tarefa } from './Tarefa';
import styles from './Tarefas.module.css';

export function Tarefas () {
  return (
    <section className={styles.tarefas}>
      <header className={styles.header} >
        <div>
          <p> Tarefas Criadas</p>
          <span>10</span>
        </div>
        <div>
          <p className={styles.textoRoxo}> Concluidas</p>
          <span>2 de 10</span>
        </div>
      </header>

      <div className={styles.lista}>
      <Tarefa/>
      <Tarefa/>
      </div>
    </section>
  )
}