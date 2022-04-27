import React from 'react'
import styles from "./Styles/Home.module.css"
import img from "./Media/img1.jpg"

export default function Home() {
  return (
    <div className={styles.container}>
    <img src={img} alt="" />
      <div className={styles.presentacion} id="home">
        <h1>Darío Ortega</h1>
        <h2>Front-End Developer</h2>
      </div>
    </div>
  )
}
