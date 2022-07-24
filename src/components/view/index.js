import React from "react";
import { Button } from 'antd'

export default function View () {
    return(
        <>
            <h1>Positions</h1>
            <div>From: USDC</div>
            <div>To: ETH</div>
            <div>DCA Rate: </div>
            <div>Number of swaps:</div>
            <div>Days left:</div>
            <div><Button type="primary">Close position</Button></div>
            <br></br>
            <div><Button type="primary">Modify Position</Button></div>
        </>

    )
}