import { observable, action, computed } from 'mobx'
import { Item } from './Item'


export class Invetory {
    @observable list = [];
    @action addItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item ? item.quantity++
            : this.list.push(new Item(name)) 
    }
    @action buyItem = name => {
        let itemIndex = this.list.findIndex(i => i.name === name)
        this.list[itemIndex].quantity === 0 ? this.list.splice(itemIndex, 1)
            : this.list[itemIndex].quantity-- 
        
    }
    @action changePrice = (name, price) => {
        let item = this.list.find(i => i.name === name)
        item.price = price
        console.log(name, item)
    }
    @computed get numItems() {
        return this.list.length
    }
}

