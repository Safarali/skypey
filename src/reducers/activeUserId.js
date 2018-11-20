import { SET_ACTIVE_USER_ID } from '../actions/constants/action-types';
const activeUserId = (state = null, action) => {
    switch (action.type) {
        case SET_ACTIVE_USER_ID:
            return action.payload;

        default:
            return state;
    }
}

export default activeUserId;