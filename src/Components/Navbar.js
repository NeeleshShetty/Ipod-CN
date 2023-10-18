import React, { Component } from 'react'
import { IoIosBatteryFull } from 'react-icons/io';
export class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            time: this.getCurrentTime()
        }
        
    } 

    getCurrentTime = () => {
        const Today = new Date();
        let time = Today.getHours() + ":" + Today.getMinutes();

        if (Today.getMinutes() < 10) {
            time = Today.getHours + ":0" + Today.getMinutes();
        }
        return time;
    }
    render() {
        const { time } = this.state;
    return (
			<div className="Navbar">
				<h5>
					<span>Ipod</span>&emsp;&emsp;&emsp;&emsp;
					<span>{time}</span>&emsp;&emsp;
					<span>
						<IoIosBatteryFull />
					</span>
				</h5>
			</div>
		);
  }
}

export default Navbar