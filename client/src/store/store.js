// store.js
import { createStore, combineReducers } from 'redux';
import { postReducer } from '../reducers/postReducer';

const rootReducer = combineReducers({
  post: postReducer,
});

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
