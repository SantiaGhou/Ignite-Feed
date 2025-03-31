import styles from './Post.module.css';
import React from 'react';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            className={styles.avatar} 
            src="https://instagram.fgnm1-1.fna.fbcdn.net/v/t51.2885-19/487037882_622905877385634_9127151639876459389_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fgnm1-1.fna.fbcdn.net&_nc_cat=106&_nc_oc=Q6cZ2QE7-FUd60tXItU14GI2VV1oYhDeUjR68wqXmxlVgu2oiUGBqN1Vs6yfealkU7m_F-o&_nc_ohc=_r3fr6FoKDMQ7kNvgE-eCBa&_nc_gid=NTBmBrQHNco4zqtBo4ag_g&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYFC1_pqmbMCXTy2PxR4kh-3pLqbn9-CTxp67ZFnwv8mDQ&oe=67ECF262&_nc_sid=7a9f4b" 
          />
          <div className={styles.authorInfo}>
            <strong>Raphael</strong>
            <span>Web Developer</span>
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