import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from './ducks/index';
import sagas from './sagas';


const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;
const sagaMiddlewares = createSagaMiddleware({ sagaMonitor });
const middlewares = [sagaMiddlewares]

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),

  )
  : applyMiddleware(...middlewares);

const store = createStore(reducers, composer);

sagaMiddlewares.run(sagas);

export default store;
