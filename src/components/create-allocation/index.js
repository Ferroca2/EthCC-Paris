import { Button, Form, Input } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React from "react";
import { Link } from 'react-router-dom'
import styles from './create.module.css';

export default function CreateAllocation () {
    return(
        <>
            <div className={styles.firstContainer}>
                <Button className={styles.button0}>
                    <Link to='/create-allocation'><span className={styles.btnTxt}>Begginer</span></Link>
                </Button>
                <Button className={styles.button0}>
                    <Link to='/create-allocation'><span className={styles.btnTxt}>Advanced</span></Link>
                </Button>
            </div>
            <div className={styles.formsContainer}>
                <Form
                    layout="vertical"
                    className={styles.formsContainerSmaller}
                >
                    <div className={styles.buySellContainer} >
                        <FormItem label={<label style={{ color: "white" }}>Sell</label>} labelCol={{span: 24, offset: 10}}>
                            <Input className={styles.formsInput} />
                        </FormItem>
                        <FormItem label={<label style={{ color: "white", textAlign: "center" }}>Buy</label>} labelCol={{span: 24, offset: 10}}>
                            <Input className={styles.formsInput} />
                        </FormItem>
                    </div>
                    <FormItem label={<label style={{ color: "white", marginTop: "40px" }}>Amount</label>} labelCol={{span: 24, offset: 10}} >
                        <Input className={styles.formsInput} />
                    </FormItem>
                    <FormItem label={<label style={{ color: "white", marginTop: "25px" }}>Period</label>} labelCol={{span: 24, offset: 10}}>
                        <Input className={styles.formsInput} />
                    </FormItem>
                </Form>
            </div>
        </>
    )
}
