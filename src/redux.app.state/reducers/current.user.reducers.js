import { ACTION_TYPES } from '../actions/action.types';
import initialState from './initial.state';

export const currentUserReducers = (currentUser = initialState.currentUser, action) => {
    if (action.type === ACTION_TYPES.SET_CURRENT_USER) {
        return action.payload;
    }
    return currentUser;
};
