import React from "react";
import styles from './home.module.css';
import { Link } from 'react-router-dom'
import PriceCard from "../priceCard";
import BenefitCard from "../benefit-card";


export default function Home() {
    return (
        <>
            <div className={styles.firstWindow}>
                <h1 className={styles.firstTitle}>Manage your Strategies</h1>
                <h6 className={styles.firstSubtitle}>With tilted you can set your crypto purcheses with an <span>automatic</span> period of time</h6>
                <button className={styles.button0}>
                    <Link to='/create'><span className={styles.btnTxt}>Start</span></Link>
                </button>
            </div>
            <div className={styles.secondWindow}>
                <div className={styles.cryptoInfo}>
                    <h2 className={styles.cryptoInfoTitle}><span className={styles.orangeText}>Main</span> crypto-currencies</h2>
                    <div className={styles.allCard}>
                        <div>Name</div>
                        <div>Price</div>
                    </div>
                    <PriceCard currency='Bitcoin .' initials=' BTC' price='26,669.00' />
                    <PriceCard currency='Ethereum .' initials='ETH' price='1,816.00' />
                    <PriceCard currency='Solana .' initials='SOL' price='45.70' />
                    <PriceCard currency='Cardano .' initials='ADA' price='0.62' />

                </div>
            </div>
            <div className={styles.thirdWindow}>
                <h2 className={styles.tiltedInfoTitle}>About <span className={styles.blueText}>Tilded</span></h2>
                <div className={styles.tiltedInfo}>
                    <img src='secondSide.svg' width={500} alt='sencond' />
                    <div className={styles.tiltedInfoColumn}>
                        <div className={styles.tiltedText}>
                            Tilted is an <span className={styles.smallerYellow}>intelligent DCA</span> that allocates your money in your choosen crypto currencies distribuiting the amount of investment <span className={styles.smallerYellow}>depending on the market variations</span>
                        </div>
                        <button className={styles.button1}>
                            <Link to='/create'><span className={styles.btnTxt}>Invest</span></Link>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.secondWindow} id={styles.fourthWindow}>
                <h2 className={styles.benefitsInfoTitle}>The Perfect solution for those who<br></br> <span className={styles.yellowText}>don't have time</span> to look the market</h2>
                <div className={styles.benefitsInfo}>
                    <BenefitCard sentence='Easily and quickly way to allocate your funds' url='public/timer.png'/>
                    <BenefitCard sentence='Inteligent algorithm that shows the best time to invest' />
                    <BenefitCard sentence='Increase your gains with an automatic allocation' />
                </div>
            </div>
            <div className={styles.secondWindow}>
                <div className={styles.lastInfo}>
                    <h2 className={styles.cryptoInfoTitle}>Join us and start rising your gains and profits in crypto in a descentralized way</h2>
                    <div ><Link to='/create' className={styles.btnEnd}>Start earning {'>'}</Link> </div>
                </div>
            </div>
        </>
    )
}