import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './avatar';

export function Comment(){
    return (
            <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/SantiaGhou.png" alt="" srcset="" />

            <div className={styles.commentBox}>
            <div className={styles.commentContent}>
            <header>
            <div className={styles.authorAndTime}>
                <strong>Santia Ghou</strong>
                <time title="11 de Maio às 08:13h" dateTime="2025-03-11 08:13:00">Cerca de 1h atrás</time>
            </div>
            <button title='deletar comentario'>
                <Trash
                size={20}
                />
            </button>
            </header>
            <p>
            muito bom parabéns!! 👏👏
            </p>

            </div>
            <footer>
             <button>
                <ThumbsUp/>
                Aplaudir <span>20</span>
             </button>
            </footer>
            </div>
            </div>
    );
}