import { Avatar } from './avatar';
import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';
 
 export function Sidebar() {
   return (
     <aside className={styles.sidebar}>
       <img
         className={styles.cover}
         src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
       />
 
       <div className={styles.profile}>
        <Avatar src="https://avatars.githubusercontent.com/u/161606315?v=4" alt="" srcset="" />
         <strong>Filipe Santiago</strong>
         <span>Fullstack Developer</span>
       </div>
 
       <footer>
         <a href="#">
            <PencilLine size={20} />
           Editar seu perfil
         </a>
       </footer>
     </aside>
   );
 }