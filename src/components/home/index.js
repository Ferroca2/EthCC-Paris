import React from "react";
import styles from './home.module.css';
import { Link } from 'react-router-dom'
import { Button } from "antd";

export default function Home () {
    return(
        <div className={styles.firstWindow}>
            <h1 className={styles.firstTitle}>Manage your Strategies</h1>
            <button className={styles.button0}>
                <Link to='/create-allocation'>Start</Link>
            </button>
        </div>
    )
}