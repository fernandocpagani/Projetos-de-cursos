import React from 'react';
import styles from "./Footer.module.css"

const Footer = () => {
  return (    
    <footer className={styles.footer}>
        <p>
          <span>React + TS Todo</span> @2023
          <p>Projeto para fins de estudo </p>
          <p>Professor: Matheus Battisti - Hora de Codar </p>
          <p>Aluno: Fernando C. Pagani</p>
        </p>
    </footer>
  )
}

export default Footer