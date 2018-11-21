import { combineReducers } from 'redux';
import activeUserId from './activeUserId';
import contacts from './contacts';
import user from './user';
import messages from './messages';
import typing from './typing';

export default combineReducers({
   user,
   contacts,
   activeUserId,
   messages,
   typing
});