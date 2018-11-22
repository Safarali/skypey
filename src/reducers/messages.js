import _ from 'lodash';
import { getMessages } from '../data/static-data';
import { SEND_MESSAGE } from '../actions/constants/action-types';

const messages = (state = getMessages(10), action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const { message, userId } = action.payload;
            const userMessages = state[userId];
            const number = +_.keys(userMessages).pop() + 1;

            return {
                ...state,
                [userId]: {
                    ...userMessages,
                    [number]: {
                        number,
                        isUserMsg: true,
                        text: message,
                    }
                }
            }

        default:
            return state;
    }
}

export default messages;