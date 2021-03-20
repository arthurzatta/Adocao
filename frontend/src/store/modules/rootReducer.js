import { combineReducers } from 'redux';

import auth from './auth/reducer';
import user from './user/reducer';
import pets from './pets/reducer';

export default combineReducers({auth, user, pets});
