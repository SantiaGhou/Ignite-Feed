import { Avatar } from './avatar';
import styles from './Post.module.css';
import React from 'react';
import { Comment } from './Comment';

export function Post(props) {
  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(props.publishedAt));

  const publishedDateRelativeToNow = new Intl.RelativeTimeFormat('pt-BR', {
    style: 'short',
  }).format(
    (new Date(props.publishedAt).getTime() - new Date().getTime()) / 1000 / 60 / 60, // Convertendo para horas
    'hours'
  );

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={props.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{props.author.name}</strong>
            <span>{props.author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={new Date(props.publishedAt).toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {props.content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={index}><a href="#">{line.content}</a></p>;
          }
          return null;
        })}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" required></textarea>
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
}
