import {combineReducer} from 'redux';
import loginReducer from './login/reducer';

const rootReducer = combineReducer({
    loggedInUsers : loginReducer,
});

export default rootReducer;