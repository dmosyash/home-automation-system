import React, { Component } from 'react';
import { switches } from './../services/dataService';

/**
 * @name Room
 * @description It is footer of the whole App
 * it contains link to this app's github page and my emailId
 */
 

class Room extends Component {

    constructor(props) {
        super(props);
        this.canvas = null;
    }

    componentDidMount() {
        this.ctx = this.canvas.getContext("2d");
        this.setPositionsOfLights();
    }

    resetCanvas = () => {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.fillStyle = "#000";
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "#dfdfdf";
        this.ctx.textAlign = "center";
        this.ctx.fillText("Room", 320, 230);
    }

    setPositionsOfLights() {
        this.lights = {};
        this.lights[switches[0]] = { name: switches[0], x: 565, y: 60, gx: 640, gy: 0, diff: 180 };
        this.lights[switches[1]] = { name: switches[1], x: 80, y: 60, gx: 0, gy: 0, diff: 90};
        this.lights[switches[2]] = { name: switches[2], x: 80, y: 450, gx: 0, gy: 480, diff: 260 };
    }

    fillGradient(item) {
        var grd = this.ctx.createRadialGradient(item.gx, item.gy, 20, item.gx, item.gy, item.diff);
        grd.addColorStop(0, "#ef8e38");
        grd.addColorStop(1, "#000");
        this.ctx.fillStyle = grd;
        this.ctx.fillRect(item.gx > 0 ? item.gx-250 : 0, item.gy > 0 ? item.gy - 250: 0, 250, 250);
    }

    renderLights = () => {
        if (!this.ctx) return;
        this.resetCanvas();
        const {switchStatus} = this.props;
        this.ctx.font = "30px Comic Sans MS";
        this.ctx.textAlign = "center";
        switches.forEach(item => {
            const light = this.lights[item];
            if (switchStatus[item]) {
                this.fillGradient(light);
            }
            this.ctx.fillStyle = switchStatus[item] ? "#dfdfdf" : "#000";
            this.ctx.fillText(light.name, light.x, light.y);
        });
    }

    render() {
        this.renderLights();
        return (
            <div>
                <canvas id="glCanvas" ref={ref => this.canvas = ref} width="640" height="480"></canvas>
            </div>
        );
    }
} 

export default Room;