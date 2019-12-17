import { createStore, applyMiddleware } from 'redux' 
import Reactotron from '../config/ReactotronConfig'
import createSagaMiddleware from 'redux-saga'

import Reducer from './Reducer'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(Reducer, applyMiddleware(sagaMiddleware))
//const store = createStore(Reducer)

sagaMiddleware.run(rootSaga)

export default store