import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
@inject("Invetory")
@observer
class Market extends Component {
    handleChange = e => {
        this.setState({
            itemName: e.target.value
        })
    }
    addItem = () => {
        this.props.Invetory.addItem(this.state.itemName)
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={this.addItem}>Add Item</button>
                <h5>You have {this.props.Invetory.numItems} items in your invetory</h5>
            </div>
        )
    }
}
export default Market