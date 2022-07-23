import React from "react";
import styles from "./priceCard.module.css"

export default function PriceCard () {
    return(
        <div className={styles.allCard}>
            <div>
                Bitcoin           -              BTC
            </div>
            <div>
                <span>0.02</span>USD
            </div>
        </div>
    )
}