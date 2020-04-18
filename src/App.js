import React, {Component} from 'react';
import './App.css';
import LiveReport from './components/LiveReport';
import Room from './components/Room';
import Settings from './components/Settings';

import { initSwitchStatus, switches } from './services/dataService';

/**
 * @name App
 * @description The main component of the app.
 * It contains three parts Header, Route part and Footer
 */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchStatus: {}
    };
  }

  componentDidMount() {
    this.setState({ switchStatus: initSwitchStatus() });
  }

  toggleSwitch = key => this.setState({ switchStatus: { ...this.state.switchStatus, [key]: !this.state.switchStatus[key] } });

  render() {
    const { switchStatus } = this.state;
    return (
      <div className="wrapper">
        <div className="report-wrapper">
          <LiveReport switchStatus={switchStatus} />
        </div>
        <div className="right-wrapper">
          <Room switchStatus={switchStatus} />
          <Settings toggleSwitch={this.toggleSwitch} switchStatus={switchStatus} />
        </div>
      </div>
    );
  }
} 

export default App;
