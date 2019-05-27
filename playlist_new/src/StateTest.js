import React, { Component } from 'react'

class Clock extends Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {data: new Date()}
  // }
  state = {date: new Date()}
  componentDidMount() {
   this.timer = setInterval(() => {
      this.setState({date: new Date() });
    }, 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div>
        {this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}

export default class StateTest extends Component {
  render() {
    return (
      <div>
        <Clock />
      </div>
    )
  }
}

