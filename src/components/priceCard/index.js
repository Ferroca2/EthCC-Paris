import React from "react";
import styles from "./priceCard.module.css"

export default function PriceCard (props) {
    return(
        <div className={styles.allCard}>
            <div>
                {props.currency} {props.initials}
            </div>
            <div>
                <span>{props.price}</span> MATIC
            </div>
        </div>
    )
}