import React, { Component } from 'react';
import { inject, observer } from 'mobx-react'
@inject('Invetory')
@observer
class Item extends Component {
  render() {
    let item = this.props.item
    let store = this.props.Invetory
    return (
      <tr>
        <td>{item.name} </td>
        <td onDoubleClick={() => (store.changePrice(item.name, prompt('enter new price')))} >{item.price} </td>
        <td>{item.quantity} </td>
        <td><button onClick={e => (store.buyItem(e.target.value))} value={item.name}>Buy</button> </td>
      </tr>
    )
  }
}
  export default Item