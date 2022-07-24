import { Button, Form, Input, Select } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React from "react";
import { Link } from 'react-router-dom'
import styles from './create.module.css';

const { Option } = Select;

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
                        <FormItem label={<label style={{ color: "white", fontSize: "20px" }}>Sell</label>} labelCol={{span: 24, offset: 9}}>
                            <Select defaultValue="USDC" style={{ width: "120px" }} className={styles.formsSelect}>
                                <Option value="USDC">USDC</Option>
                                <Option value="BRL">BRL</Option>
                                <Option value="EUR">EUR</Option>
                            </Select>
                            {/* <Input className={styles.formsInput} /> */}
                        </FormItem>
                        <img src="troca.png" alt="img" width="35px" height="35px"/>
                        <FormItem label={<label style={{ color: "white", fontSize: "20px" }}>Buy</label>} labelCol={{span: 24, offset: 10}}>
                        <Select defaultValue="USDC" style={{ width: "120px" }} className={styles.formsSelect}>
                                <Option value="USDC">USDC</Option>
                                <Option value="BRL">BRL</Option>
                                <Option value="EUR">EUR</Option>
                        </Select>
                        </FormItem>
                    </div>
                    <FormItem label={<label style={{ color: "white", marginTop: "30px", fontSize: "20px" }}>Amount</label>} labelCol={{span: 24, offset: 10}} >
                        <Input className={styles.formsInput} />
                    </FormItem>
                    <FormItem label={<label style={{ color: "white", marginTop: "5px", fontSize: "20px" }}>Period</label>} labelCol={{span: 24, offset: 10}}>
                        <Input className={styles.formsInput} />
                    </FormItem>
                    <FormItem label={<label style={{ color: "white", marginTop: "5px", fontSize: "20px" }}>Email</label>} labelCol={{span: 24, offset: 10}}>
                        <Input className={styles.formsInput} />
                    </FormItem>
                    <Button className={styles.button1}>Criar Posição</Button>
                </Form>
            </div>
        </>
    )
}
