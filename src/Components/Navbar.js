import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Styles/Navbar.module.css"

export default function Navbar() {
  const scroll = (num) =>{
    console.log("clickeado");
  }

  return (
    <div className={styles.container}>
        <div className={styles.ban}></div>
        <div className={styles.logo}>
            <Link to={"/"}><h1>{"<DO/>"}</h1></Link>
        </div>
        <span className="material-symbols-outlined">
          menu
        </span>
        <div className={styles.links}>
        
          <ul>
            <li><p onClick={scroll("200vh")}>About me</p></li>
            <li><p onClick={scroll("200vh")}>Proyectos</p></li>
            <li><p onClick={scroll("200vh")}>Herramientas</p></li>
          </ul>
        </div>
    </div>
  )
}
