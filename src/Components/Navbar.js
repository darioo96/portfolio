import React from 'react'
import { Link } from 'react-scroll'
import styles from "./Styles/Navbar.module.css"

const clickMenu = () =>{
  var auxLink = document.getElementById('links');
  var anchoPantalla = window.innerWidth;
  if(anchoPantalla <= 768){
      if (auxLink.style.transform === "translateX(100vh)") {
      auxLink.style.transform = "translateX(0vh)";
  }
  else{
    auxLink.style.transform = "translateX(100vh)";

  }
  }

}

export default function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.ban}></div>
        <div className={styles.logo}>
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-1250} duration={500} delay={100}><h1>{"<DO/>"}</h1></Link>
        </div>
        <div className={styles.menu} onClick={clickMenu}>
          <i className={styles.ggMenu}></i>          
        </div>
        <div className={styles.links} id='links'>
          <ul>
            <li><Link onClick={clickMenu} activeClass="active" to="AboutMe" spy={true} smooth={true} offset={1} duration={500} delay={100}>About me</Link></li>
            <li><Link onClick={clickMenu} activeClass="active" to="Proyectos" spy={true} smooth={true} offset={2} duration={500} delay={100}>Proyectos</Link></li>
            <li><Link onClick={clickMenu} activeClass="active" to="Herramientas" spy={true} smooth={true} offset={3} duration={500} delay={100}>Herramientas</Link></li>
          </ul>
        </div>
    </div>
  )
}
