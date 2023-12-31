import {createStore ,applyMiddleware,compose} from 'redux'

import reducer from './reducer'
import thunk from 'redux-thunk'



const composeRedux = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducer,composeRedux(applyMiddleware(thunk)));

export default store


