import React from 'react'
import styles from './Tarjeta.module.css'
import rymimg from '../Media/rym_pagina.png'

export default function Tarjeta() {
  return (
    <div className={styles.container}>
        <div className={styles.tarjeta}>
            <div className={`${styles.cara} ${styles.frente}`}>
                <h3>Rick y Morthy App</h3>
                <img src={rymimg} alt="" />
            </div>

            <div className={`${styles.cara} ${styles.atras}`}>
                <h3>Rick y Morthy App</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime dolorum nam nesciunt similique accusantium voluptate delectus, cupiditate dolorem labore voluptatum dolores quod ab incidunt esse nemo error amet qui dignissimos!</p>
                <div className={styles.link}>
                    <a href=''> <i className="gg-link"></i> </a>
                    <a href=''> <i className="gg-link"></i> </a>
                </div>
            </div>
        </div>
    </div>
  )
}
