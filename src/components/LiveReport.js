import React from 'react';
import { getAppliances, switches } from './../services/dataService';

/**
 * @name LiveReport
 * @description It is Report section of the App
 * it contains table to show reports of the electric equipments in the room.
 * It takes data from the dataSevices service file and calculate total energy consumption of the room.
 */

const liveReportStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const tableRow = rowData => (<tr key={rowData.name}><td>{rowData.name}</td><td>{rowData.energyConsumption}</td><td>{rowData.status}</td></tr>);

const createTable = (switchStatus) => {
    let totalConsumption = 0;
    const appliances = getAppliances();
    const tableRows = switches.map(item => {
        const json = { ...appliances[item] };
        json.name = item;
        json.status = switchStatus[item] ? 'On' : 'Off';
        totalConsumption += switchStatus[item] ? appliances[item].energyConsumption : 0;
        return tableRow(json);
    });
    return (
        <table>
            <thead>
            <tr>
                <th>Name</th>
                <th>Energy</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>{tableRows}</tbody>
            <tfoot>
            <tr>
                <td colSpan="2">Total Consumption</td>
                <td>{totalConsumption}</td>
                </tr>
            </tfoot>
        </table>
    )
}
 
const LiveReport = (props) => (
    <div style={liveReportStyle}>
        {createTable(props.switchStatus)}
    </div>
);

export default LiveReport;