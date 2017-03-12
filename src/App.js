import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Row>
            <Col span={24}>
              <Button type="primary">If this button is styled, Antd is working</Button>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col span={24}>
              <p className="App-intro">
                To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;
