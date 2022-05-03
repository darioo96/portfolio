import React from 'react'
import styles from "./Styles/Proyectos.module.css"
import prog_img from "./Media/programer-img.svg"

export default function Proyectos() {
  return (
    <div className={styles.container} id="Proyectos">
      <div className={styles.container_img}>
        <img src={prog_img} alt="" />
      </div>
      <div className={styles.boxes}>
        <div className={styles.box_proyect}>Proyecto 1</div>
        <div className={styles.box_proyect}>Proyecto 2</div>
        <div className={styles.box_proyect}>Proyecto 3</div>        
      </div>

    </div>
  )
}
