import styles from './Sidebar.module.css';
import { PencilLine } from 'phosphor-react';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
      />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/xCall.png" alt="avatar" />
        <strong>Carlos Faita</strong>
        <span>Fullstack Web Developer</span>
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