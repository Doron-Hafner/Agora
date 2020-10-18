import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Invetory as invetory } from './stores/Invetory'
import { Item as item} from './stores/Item'
import { Provider } from 'mobx-react';

const Invetory = new invetory()
const Item = new item()
const stores = {Invetory, Item}

let ipod = new item('ipod')
Invetory.list.push(ipod)
// Use the prop "store" for your store
ReactDOM.render(<Provider {...stores}><App /></Provider> , document.getElementById('root'));
registerServiceWorker();
