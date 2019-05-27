import React, {Component} from 'react'

function Welcome1(props) {
  return (
    <div>Welcome1,{props.name}</div>
  );
}

class Welcome2 extends Component {
  render() {
    return <div>Welcome2,{this.props.name}</div>
  }
}

export default function CompType() {
  return (
    <div>
      <Welcome1 name="丁"/>
      <Welcome2 name="浩宸"/>
    </div>
  );
}
