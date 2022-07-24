import React from "react";
import styles from "./benefit.module.css"

export default function BenefitCard (props) {
    return(
        <div className={styles.allCard}>
            <div className={styles.circle}>
                
            </div>
            <div className={styles.benefitDescription}>{props.sentence}</div>
        </div>
    )
}