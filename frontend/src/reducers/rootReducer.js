import { combineReducers } from 'redux';
import authReducer from './authReducer';

//root reducer, combine other reducers as one
const rootReducer = combineReducers({
    authReducer
});

export default rootReducer;