import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ReducerContainer from './reducers';
import SagaContainer from './saga';
import logger from 'redux-logger';

const sagaMiddleware = createSagaMiddleware();

// Wraping all reducer and sagas in a container called store
const store = createStore(ReducerContainer, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(SagaContainer);

// default importing
export default store;
