import React from "react";
import styles from './home.module.css';
import { Link } from 'react-router-dom'
import { Button } from "antd";
import PriceCard from "../priceCard";
import BenefitCard from "../benefit-card";


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
                <PriceCard currency='Bitcoin' initials='BTC' price='20.000'/>
                <PriceCard currency='Ethereum' initials='ETH' price='1.000'/>
                <PriceCard currency='Tilted Token' initials='TT' price='999.999.999'/>

            </div>
        </div>
        <div className={styles.thirdWindow}>
                <h2 className={styles.tiltedInfoTitle}>About <span className={styles.blueText}>Tilded</span></h2>
            <div className={styles.tiltedInfo}>
                <img src='secondSide.svg' width={500} alt='sencond'/>
                <div className={styles.tiltedInfoColumn}>
                    <div className={styles.tiltedText}>
                    Tilted is an <span className={styles.smallerYellow}>intelligent DCA</span> that allocates your money in your choosen crypto currencies distribuiting the amount of investment <span className={styles.smallerYellow}>depending on the market variations</span>
                    </div>
                    <button className={styles.button1}>
                <Link to='/create-allocation'><span className={styles.btnTxt}>Invest</span></Link>
            </button>
                </div>
            </div>
        </div>
        <div className={styles.secondWindow}>
                <h2 className={styles.benefitsInfoTitle}>The Perfect solution for those who<br></br> <span className={styles.yellowText}>don't have time</span> to look the market</h2>
            <div className={styles.benefitsInfo}>
                <BenefitCard sentence='Easly and quickly way to allocate your funds'/>
                <BenefitCard sentence='Inteligent algorithm that shows the best time to invest'/>
                <BenefitCard sentence='Increase your gains with an automatic allocation'/>
            </div>
        </div>
        <div className={styles.secondWindow}>
            <div className={styles.lastInfo}>
                <h2 className={styles.cryptoInfoTitle}>Join us and start rising your gains and profits in crypto in a descentralized way</h2>
                    <div ><Link to='/create-allocation' className={styles.btnEnd}>Start earning {'>'}</Link> </div>
            </div>
        </div>
        </>
    )
}