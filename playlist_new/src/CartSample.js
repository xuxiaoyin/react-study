import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class CartSample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goods: [
        { text: '百万年薪架构师', price: 100, id: 1 },
        { text: 'Web全栈', price: 80, id: 2 },
        { text: 'Java', price: 60, id: 3 },
      ]
    };
  }

  render() {
    const good = this.state.goods.map(good => { return <li key={good.id}>{good.text}</li>})
    return (
      <div>
        <ul>{good}</ul>
      </div>
    )
  }
}

