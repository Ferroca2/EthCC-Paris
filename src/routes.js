import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/index";
import CreateAllocation from "./components/create";
import View from "./components/view";
import logo from './logo.svg'
import { Link } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import './App.css'

import { Layout, Menu} from "antd";
import CreateAllocation2 from "./components/create2";
const { Header, Content } = Layout;

const ApplicationRoutes = () => {
  return (
    <Router>
      <Layout>
        <Header>
          <div className="logo">
              <img src={logo} height={50} width={50} alt=''/>
              <div className='site-title'>Tilted</div>

          </div>
          <div className="button-nav-wrapper">
            <ConnectButton>Connect your wallet</ConnectButton>
          </div>
          <Menu
            theme="dark"
            mode="horizontal">
                <Menu.Item key='1'>
                    <Link className='linkNav' to='/create'>
                        Create
                    </Link>
                </Menu.Item>
                <Menu.Item key='2'>
                    <Link className='linkNav' to='/view'>
                        View Your Strategies
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
        <Content
          style={{
            color: "white",
            minHeight: "calc(100vh - 65px)",
            background: "#001529",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateAllocation />} />
            <Route path="/create2" element={<CreateAllocation2 />} />
            <Route path="/view" element={<View />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
};
export default ApplicationRoutes;
