import React from "react";
import styles from './home.module.css';
import { Link } from 'react-router-dom'
import { Button } from "antd";
import PriceCard from "../priceCard";

export default function Home () {
    return(
        <>
        <div className={styles.firstWindow}>
            <h1 className={styles.firstTitle}>Manage your Strategies</h1>
            <h6 className={styles.firstSubtitle}>With tilted you can set your crypto purcheses with an automatic period of time</h6>
            <button className={styles.button0}>
                <Link to='/create-allocation'><span className={styles.btnTxt}>Start</span></Link>
            </button>
        </div>
        <div className={styles.secondWindow}>
            <div className={styles.cryptoInfo}>
                <h2 className={styles.cryptoInfoTitle}><span className={styles.orangeText}>Main</span> crypto-currencies</h2>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
                <PriceCard/>
            </div>
        </div>
        <div className={styles.thirdWindow}>
                <h2 className={styles.tiltedInfoTitle}>What is <span className={styles.blueText}>Tilded.fin</span>?</h2>
            <div className={styles.tiltedInfo}>
                <img src='secondSide.svg' width={500} alt='sencond'/>
                <div className={styles.tiltedInfoColumn}>
                    <div className={styles.tiltedText}>
                    Tilted is an intelligent DCA that allocates your money in your choosen crypto currencies distribuiting the amount of investment depending on the market variations
                    </div>
                    <button className={styles.button1}>
                <Link to='/create-allocation'><span className={styles.btnTxt}>Start</span></Link>
            </button>
                </div>
            </div>
        </div>
        </>
    )
}