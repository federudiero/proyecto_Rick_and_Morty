import {createStore ,applyMiddleware,compose} from 'redux'

import reducer from './reducer'
import thunk from 'redux-thunk'

 compose( window.__REDUX_DEVTOOLS_EXTENSION__ && Window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk))


const store = createStore(reducer,compose);

export default store