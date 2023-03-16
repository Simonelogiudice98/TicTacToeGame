import React from 'react';
import styles from "./Header.module.scss";


export default function Header(){
    return(
        <div className={styles.headerContainer}>
            <header className={styles.header}>
                <h1>Tris Game</h1>
            </header>
        </div>
    );
}