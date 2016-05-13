import 'normalize.css'
import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import Store from './Store/store.js'
import Root from './Components/root.jsx'

ReactDOM.render(<Provider store={Store}><Root/></Provider>, document.getElementById('root'));
