import { Avatar } from './avatar';
import styles from './Post.module.css';
import React, { useState } from 'react';
import { Comment } from './Comment';

export function Post(props) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() === "") return;
    
    setComments((prevComments) => [...prevComments, newComment]);
    setNewComment("");
  };

  const handleDeleteComment = (commentToDelete) => {
    setComments((prevComments) => prevComments.filter(comment => comment !== commentToDelete));
  };

  const publishedDate = new Date(props.publishedAt);
  const publishedDateFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit',
  }).format(publishedDate);

  const timeDifference = Math.floor((publishedDate.getTime() - new Date().getTime()) / 1000 / 60 / 60); // Horas
  const publishedDateRelativeToNow = new Intl.RelativeTimeFormat('pt-BR', {
    style: 'short',
  }).format(timeDifference, 'hours');

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

        <time title={publishedDateFormatted} dateTime={publishedDate.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {props.content.map((line, index) => {
          if (line.type === 'paragraph') {
            return <p key={index}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={index}><a href={line.content} target="_blank" rel="noopener noreferrer">{line.content}</a></p>;
          }
          return null;
        })}
      </div>

      <form className={styles.commentForm} onSubmit={handleCommentSubmit}>
        <strong>Deixe seu feedback</strong>
        <textarea 
          placeholder="Deixe um comentário" 
          value={newComment} 
          onChange={(e) => setNewComment(e.target.value)}
          required
        ></textarea>
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment, index) => (
          <Comment key={index} content={comment} onDelete={handleDeleteComment} />
        ))}
      </div>
    </article>
  );
}
