import { ACTION_TYPES } from './action.types';

export const setCurrentUser = (currentUserState) => {
    return {
        type: ACTION_TYPES.SET_CURRENT_USER,
        payload: currentUserState
    };
};

// MORE ACTIONS BELOW HERE


// THUNKS WILL GO BELOW
