import { combineReducers } from 'redux';
import commonReducer from './modules/common/common.reducer';
import authReducer from './modules/auth/auth.reducer';

const reducers =  combineReducers({
  common: commonReducer,
  auth: authReducer
})

export default reducers;