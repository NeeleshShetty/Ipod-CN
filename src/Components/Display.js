import React, { Component } from 'react'
import Lockscreen from './Lockscreen'
import Navbar from './Navbar'

export class Display extends Component {
  render() {
    return (
        <>
            <Navbar />
            <Lockscreen />
        </>
    )
  }
}

export default Display