import React from 'react'
import styles from "./Styles/Navbar.module.css"

export default function Navbar() {
  return (
    <div className={styles.container}>
        <div className={styles.ban}></div>
        <div className={styles.logo}>
            <h1>{"<DO/>"}</h1>
        </div>
    </div>
  )
}
