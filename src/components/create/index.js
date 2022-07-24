import { Button, Form, Input, Select } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React from "react";
import { Link } from 'react-router-dom'
import styles from './create.module.css';

export default function CreateAllocation () {
    return(
        <>
            <div className={styles.firstContainer}>
                <Button className={styles.button0}>
                    <Link to='/create'><span className={styles.btnTxt}>Begginer</span></Link>
                </Button>
                <Button className={styles.button1}>
                    <Link to='/create2'><span className={styles.btnTxt}>Advanced</span></Link>
                </Button>
            </div>
            <div className={styles.formsContainer}>
                <Form
                    layout="vertical"
                    className={styles.formsContainerSmaller}
                >
                    <div className={styles.buySellContainer} >
                    <FormItem style={{color: 'black', width:'40%'}}  label={<label style={{ color: "white", marginTop: "40px" }}>Sell</label>} labelCol={{span: 24, offset: 10}} >
                        <Select defaultValue='USDC' style={{color: 'black', backgroundColor:'#D9D9D9'}} className={styles.formsInput}>
                            <Select.Option style={{color: 'black', backgroundColor:'#D9D9D9'}}  value='USDC'>USDC</Select.Option>
                        </Select>       
                    </FormItem>
                    <FormItem style={{color: 'black', width:'40%'}} label={<label style={{ color: "white", marginTop: "40px" }}>Buy</label>} labelCol={{span: 24, offset: 10}} >
                        <Select defaultValue='ETH' style={{color: 'black'}} className={styles.formsInput}>
                            <Select.Option style={{color: 'black'}} value='ETH'>ETH</Select.Option>
                        </Select>    
                    </FormItem>
                    </div>
                    <FormItem label={<label style={{ color: "white", marginTop: "40px" }}>Amount</label>} labelCol={{span: 24, offset: 10}} >
                        <Input className={styles.formsInput} />
                    </FormItem>
                    <FormItem label={<label style={{ color: "white", marginTop: "25px" }}>Period</label>} labelCol={{span: 24, offset: 10}}>
                        <Input className={styles.formsInput} />
                    </FormItem>
                </Form>
                <button className={styles.button3}>
                    <Link to='/create'><span className={styles.btnTxt}>Create</span></Link>
                </button>
            </div>
        </>
    )
}
