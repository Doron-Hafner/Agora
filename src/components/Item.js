import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
  checkItem = (item) => {
    this.props.store.checkItem(item)
  }
  editItem = (e) => {
    this.props.store.editItem(e.target.value, prompt('enter location'));
  }
  deleteItem = (e) => {
    this.props.store.deleteItem(e.target.value)
  }
  render() {
    let item = this.props.item
    return (
      <div className={item.completed ? 'crossed' : null} >
        <input type='checkbox' value={item.name} onChange={e => this.checkItem(e.target.value)} />
        {item.name} {item.location}
        <button onClick={this.editItem} className='editButton' value={item.name}>Edit Location</button>
        <button onClick={this.deleteItem} className='deleteButton' value={item.name}>DELETE</button>
      </div>)
  }
}

export default Item