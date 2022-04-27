import React from 'react'
import { Link } from 'react-scroll'
import styles from "./Styles/Navbar.module.css"

export default function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.ban}></div>
        <div className={styles.logo}>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-250} duration={500} delay={100}><h1>{"<DO/>"}</h1></Link>
        </div>
        <span className="material-symbols-outlined">
          menu
        </span>
        <div className={styles.links}>
        
          <ul>
            <li><Link activeClass="active" to="AboutMe" spy={true} smooth={true} offset={1} duration={500} delay={100}>About me</Link></li>
            <li><Link activeClass="active" to="Proyectos" spy={true} smooth={true} offset={2} duration={500} delay={100}>Proyectos</Link></li>
            <li><Link activeClass="active" to="Herramientas" spy={true} smooth={true} offset={3} duration={500} delay={100}>Herramientas</Link></li>
          </ul>
        </div>
    </div>
  )
}
