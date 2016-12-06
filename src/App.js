import React, { Component } from 'react';
import { Row, Col } from 'antd';

import { WrappedDynamicFieldSet } from './Form';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col span={24}>
            <div className="App-header">
              <h2>Do your kitchen magic!</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col span={12} offset={6}>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
            <WrappedDynamicFieldSet />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
