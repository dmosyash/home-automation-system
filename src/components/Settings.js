import React from 'react';
import { switches } from './../services/dataService';

/**
 * @name Footer
 * @description It is footer of the whole App
 * it contains link to this app's github page and my emailId
 */

const settingsStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const buttonStyle = {
    margin: 'auto',
    fontFamily: 'monospace',
    width: '100px',
    height: '40px',
    borderRadius: '20px',
}
 
const createSwitches = (toggleSwitch, switchStatus) => {
    return switches.map(switchName => (
        <button key={switchName}
            style={{ ...buttonStyle, backgroundColor: (switchStatus[switchName] ? 'chartreuse' : 'transparent') }}
            onClick={() => toggleSwitch(switchName)}>
            {switchName} - {switchStatus[switchName] ? 'On' : 'Off'}
        </button >
    ));
}

const Settings = (props) => (
    <div style={settingsStyle}>
        {createSwitches(props.toggleSwitch, props.switchStatus)}
    </div>
);

export default Settings;