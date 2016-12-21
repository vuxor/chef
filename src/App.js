import React, { Component } from 'react';
import { Row, Col } from 'antd';

import { WrappedDynamicFieldSet } from './Form';
import AllRecipes from './AllRecipes';
import recipesStore from './RecipesStore';
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
            <WrappedDynamicFieldSet />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <AllRecipes recipesStore={recipesStore} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
