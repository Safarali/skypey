import { combineReducers } from 'redux';
import activeUserId from './activeUserId';
import contacts from './contacts';
import user from './user';


export default combineReducers({
   user,
   contacts,
   activeUserId
});