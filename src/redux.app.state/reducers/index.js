import { combineReducers } from 'redux';
import { currentUserReducers } from './current.user.reducers';


export default combineReducers({
    currentUser: currentUserReducers,
});

