import { Link, useNavigate } from "react-router-dom";
import React from 'react'; 
import styles from '/src/css/Nav.module.css';

const Nav = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {

    navigate('/login');
  };

  return (
    <section className={styles.nav}>
      <Link to="/home" className={styles.tlink}>Home</Link>
      <Link to="/login" className={styles.tlink}>Login</Link>
      <Link to="/livros" className={styles.tlink}>Livros</Link>
      <Link to="/pedido" className={styles.tlink}>Pedido</Link>
      <Link to="/sobre" className={styles.tlink}>Sobre Nós</Link>
      
    </section>
  );
};

export default Nav;
