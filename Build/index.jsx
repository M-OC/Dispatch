import 'normalize.css'
import './styles.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {StyleRoot} from 'radium'
import Store from './Store/store.js'
import Root from './Components/root.jsx'

ReactDOM.render(<Provider store={Store}><StyleRoot><Root/></StyleRoot></Provider>, document.getElementById('root'));
