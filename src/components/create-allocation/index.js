import { Button, Form, Input, Select } from "antd";
import FormItem from "antd/lib/form/FormItem";
import React from "react";
import { Link } from 'react-router-dom'
import styles from './create.module.css';
import { useState } from 'react'
import { PrivyClient, SiweSession } from '@privy-io/privy-browser';

const { Option } = Select;

const provider = typeof window !== 'undefined' ? window.ethereum : null;
const session = new SiweSession(process.env.NEXT_PUBLIC_PRIVY_API_KEY, provider);
const client = new PrivyClient({
    session: session,
});

export default function CreateAllocation() {
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState(null);
    const [error, setError] = useState(false);
    const putUserData = async () => {
        const addressName = await session.address();
        setAddress(addressName);
        console.log(address);
        await client.put(addressName, [
            { field: 'email', value: email }
        ]);
    }

    const sendEmail = async () => {
        try {
            const res = await fetch(`src/api/send-email`, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    access_token: '',
                }),
                body: JSON.stringify({
                    userId: address,
                    subject: 'subject email',
                    htmlContent: '<p>My html comes here</p>',
                }),
            })
            if (!res.ok) {
                console.error(res.status, await res.json())
                throw new Error('Failed to send')
            }
        } catch (e) {
            setError(true)
        }
    }

    return (
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
                        <FormItem label={<label style={{ color: "white", fontSize: "20px" }}>Sell</label>} labelCol={{ span: 24, offset: 9 }}>
                            <Select defaultValue="USDC" style={{ width: "120px" }} className={styles.formsSelect}>
                                <Option value="USDC">USDC</Option>
                                <Option value="BRL">BRL</Option>
                                <Option value="EUR">EUR</Option>
                            </Select>
                            {/* <Input className={styles.formsInput} /> */}
                        </FormItem>
                        <img src="troca.png" alt="img" width="35px" height="35px" />
                        <FormItem label={<label style={{ color: "white", fontSize: "20px" }}>Buy</label>} labelCol={{ span: 24, offset: 10 }}>
                            <Select defaultValue="USDC" style={{ width: "120px" }} className={styles.formsSelect}>
                                <Option value="USDC">USDC</Option>
                                <Option value="BRL">BRL</Option>
                                <Option value="EUR">EUR</Option>
                            </Select>
                        </FormItem>
                    </div>
                    <FormItem label={<label style={{ color: "white", marginTop: "30px", fontSize: "20px" }}>Amount</label>} labelCol={{ span: 24, offset: 10 }} >
                        <Input className={styles.formsInput} />
                    </FormItem>
                    <FormItem label={<label style={{ color: "white", marginTop: "5px", fontSize: "20px" }}>Period</label>} labelCol={{ span: 24, offset: 10 }}>
                        <Input className={styles.formsInput} />
                    </FormItem>
                    <FormItem label={<label style={{ color: "white", marginTop: "5px", fontSize: "20px" }}>Email</label>} labelCol={{ span: 24, offset: 10 }}>
                        <Input className={styles.formsInput}
                            id="email"
                            onChange={(event) => {
                                setEmail(event.target.value);
                            }}
                            value={email}
                        />
                    </FormItem>
                    <Button className={styles.button1} onClick={putUserData && sendEmail}>Criar Posição</Button>
                </Form>
            </div>
        </>
    )
}
