import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import { watchFetchDog } from './saga';

const configureStore = () => {
}


export default configureStore;