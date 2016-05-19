import {createStore} from 'redux'
import Reducers from './Reducers/index.js'

var Store = createStore(Reducers);

export default Store