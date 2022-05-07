import React from 'react'
import styles from "./Styles/Proyectos.module.css"
import prog_img from "./Media/programer-img.svg"
import Tarjeta from './Tarjetas/Tarjeta'

export default function Proyectos() {
  return (
    <section className={styles.container} id="Proyectos">
      <Tarjeta/>
    </section>
  )
}