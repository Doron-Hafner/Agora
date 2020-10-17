import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    @observable list = [];
    @observable length;
    @action checkItem = (name) => {
        let item = this.list.find(l => l.name === name)
        item.completed = !item.completed
    }
    @action addItem = (name) => {
        this.list.push(new Item (name))
    }
    @action editItem = (name, promt) => {
        let item = this.list.find(l => l.name === name)
        item.location = promt
    }
    @action deleteItem = (name) => {
        let itemIndex = this.list.findIndex(l => l.name === name)
        this.list.splice(itemIndex, 1)
    } 
}

