//import {createStore} from 'redux';
import rootReducer from './rootReducer';
import {configureStore} from '@reduxjs/toolkit';
import process from 'process';


// const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//     );


const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});
export default store;