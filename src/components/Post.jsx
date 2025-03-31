import { Avatar } from './avatar';
import styles from './Post.module.css';
import React from 'react';
import { Comment } from './Comment';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
          src={"https://github.com/Darkx32.png"}
          />
          <div className={styles.authorInfo}>
            <strong>Matheus</strong>
            <span>.NET Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉<a href="">jane.design/doctorcare</a></p>
        <p><a href="">#novoprojeto #nlw #react</a></p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" required></textarea>
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>


      <div className={styles.commentList}>
        <Comment/>
      </div>
    </article>
  )
}