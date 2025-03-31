import { Header } from './components/Header';
import { Post } from './components/Post'
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Darkx32.png',
      name: 'Darkx32',
      role: '.NET Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de desenvolver uma lib de Audio em c++ da uma conferida' }, 
      { type: 'link', content: 'https://github.com/Darkx32/AudioEngine' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/GuilhermeRBr.png',
      name: 'GuilhermeRBr',
      role: 'Python Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'Estive estudando python nos ultimos tempos, e tive uma grande melhora vocês podem dar uma olhada em meu github!!! 🚀' },
      { type: 'link', content: 'https://github.com/GuilhermeRBr' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/Jh0rd4n.png',
      name: 'Jhordan',
      role: 'Frontend Developer'
    },
    content: [
      { type: 'paragraph', content: 'Salve meus manos' },
      { type: 'paragraph', content: 'Deem uma olhada nos projetos que fiz no meu inicio em frontend! 🚀' },
      { type: 'link', content: 'https://github.com/Jh0rd4n/Projetos-de-Cursos-HTML-CSS' },
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  }
];


export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}