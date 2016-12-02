import React, { Component } from 'react';
import { Row, Col } from 'antd';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col span={24}>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React!</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
