import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import { createLogger } from 'redux-logger';
import { LOADING } from './modules/common/common.actions';

const middlewares = [];
const logger = createLogger({level: 'log'});

if(process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const store = createStore(reducers, compose(
  applyMiddleware(...middlewares)
));

store.dispatch({ type: LOADING });

export default store;