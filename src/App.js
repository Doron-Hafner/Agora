import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
import './App.css';
import Item from './components/Item';
import Market from './components/Market'
@inject("Invetory")
@observer
class App extends Component {

  render() {
    return (
      <div>
        <Market />
        <table>
          <tr>
            <th>name</th>
            <th>price</th>
            <th>quantity</th>
            <th></th>
          </tr>
          {this.props.Invetory.list.map((i, index) => <Item item={i} key={index} />)}
        </table>
      </div>
    )
  }
}
export default App;
