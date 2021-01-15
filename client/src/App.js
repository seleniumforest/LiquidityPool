import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Dropdown } from 'react-bootstrap';
import PoolInfo from './components/PoolInfo';
import PoolActions from './components/PoolActions';
import History from './components/History';

export default function App() {

  return (
    <Container>
      <h2>
        How Liquidity pool works?
      </h2>
      {/* <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select pool Example
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item>ETH/DAI (volatile/stable)</Dropdown.Item>
          <Dropdown.Item>ETH/WBTC (volatile/volatile)</Dropdown.Item>
          <Dropdown.Item>USDC/DAI (stable/stable)</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown> */}
      <PoolInfo />
      <PoolActions />
      <History />
    </Container>
  );
}
