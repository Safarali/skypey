import { getMessages } from '../data/static-data';

const messages = (state = getMessages(10), action) => {
    return state;
}

export default messages;