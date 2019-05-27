import React, { Component } from 'react'
import logo from './logo.svg'
import './JsxTest.css'

function formatName(user) {
  return user.firstName + '-' + user.lastName;
}

export default class JsxTest extends Component {
  render() {
    const name = 'Hello'
    const greet = <p>Hello, son!</p>
    return (
      <div>
        <h1>{name}</h1>
        <p>{formatName({firstName: '丁', lastName: '浩宸'})}</p>
        {greet}
        <img src={logo} alt="logo" style={{width: "100px"}} className="img"/>
      </div>
    )
  }
}
