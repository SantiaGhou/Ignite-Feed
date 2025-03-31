import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import { Avatar } from './avatar';
import { useState } from 'react';

export function Comment({ content, author = "SantiaGhou", onDelete }) {
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    };

    function deleteComment() {
        onDelete?.(content);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/SantiaGhou.png" alt={`Foto de perfil de ${author}`} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{author}</strong>
                            <time title="11 de Maio às 08:13h" dateTime="2025-03-11 08:13:00">
                                Cerca de 1h atrás
                            </time>
                        </div>
                        <button title="Deletar comentário" onClick={deleteComment}>
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLike} className={liked ? styles.liked : ""}>
                        <ThumbsUp />
                        {liked ? "Curtido" : "Aplaudir"}
                    </button>
                </footer>
            </div>
        </div>
    );
}
