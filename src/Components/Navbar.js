import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Styles/Navbar.module.css"

export default function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.ban}></div>
        <div className={styles.logo}>
            <Link to={"/"}><h1>{"<DO/>"}</h1></Link>
        </div>
        <div className={styles.links}>
          <ul>
            <li><Link to={"/aboutme"}>About me</Link></li>
            <li><Link to={"/proyectos"}>Proyectos</Link></li>
            <li><Link to={"/herramientas"}>Herramientas</Link></li>
          </ul>
        </div>
    </div>
  )
}
