import React, { Component } from 'react';
import { Icon } from 'antd';

import react_logo from '../assets/react_logo.svg';
import antd_logo from '../assets/antd_logo.svg'
import redux_logo from '../assets/redux_logo.svg'
import '../stylesheets/components/App.css';

class App extends Component {

  render() {
    const github_url = "https://github.com/neosepulveda/redux-react-antd-starter";
    return (
      <div className="app">
        <div className="app-body">
          <img src={redux_logo} className="app-logo" alt="redux_logo" />
          <img src={react_logo} className="app-logo" alt="react_logo" />
          <img src={antd_logo} className="app-logo" alt="antd_logo" />
          <h2>React + Redux + AntDesign starter</h2>
          <a href={github_url}><Icon type="github" /> {github_url}</a>
        </div>
      </div>
    );
  }
}

export default App;
