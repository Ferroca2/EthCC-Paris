import { Button, Form, Input, Select } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import styles from './create.module.css';
import { ethers } from "ethers"
import Sample from '../../Sample.json'


export default function CreateAllocation () {
    const navigate = useNavigate()

    async function CreatePosition() {
        if (typeof window.ethereum !== "undefined") {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner()

            console.log({ provider });
            const contract = new ethers.Contract('0x266333758B5A5ED6c7557A592AdD4B263E2A5D4e', Sample.abi, signer);
            try {
                const data = await contract.update('transaction sample');
                console.log("data: ", data);
                navigate('/')
            } catch (err) {
              console.log("Error: ", err);
            }
          }
    
        } 

    
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
                    <FormItem label={<label style={{ color: "white", marginTop: "25px" }}>Period(days)</label>} labelCol={{span: 24, offset: 10}}>
                        <Input className={styles.formsInput} />
                    </FormItem>
                </Form>
                <button className={styles.button3} onClick={CreatePosition}>
                    <span className={styles.btnTxt}>Create</span>
                </button>
            </div>
        </>
    )
}
