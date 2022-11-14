import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/xcall.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <time title="11 de maio públicado as 08:13h" dateTime="2022-05-11 08 08:13:23">Cerca de 1h atŕas</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={20}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!!</p>
        </div>
        <footer>
          <ThumbsUp size={20} />
          Aplaudir <span></span>
        </footer>
      </div>
    </div>
  );
}