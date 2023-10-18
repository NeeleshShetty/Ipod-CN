import React, { Component } from 'react';
import { AiFillFastForward } from 'react-icons/ai';
import { AiFillFastBackward } from 'react-icons/ai';
import { PiPlayPauseFill } from 'react-icons/pi';
export class Wheel extends Component {
	render() {
		return (
            <div className="ipod-functions">
                <div className='wheel' id='wheel'>
				<div className="control" id="Menu">Menu</div>
				<div className="control" id="forward"><AiFillFastForward /></div>
				<div className="control" id="reverse"><AiFillFastBackward /></div>
				<div className="control" id="play-pause"><PiPlayPauseFill /></div>
                
                </div>
                <div className="ok-button"></div>
			</div>
		);
	}
}

export default Wheel;
