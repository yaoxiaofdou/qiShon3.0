import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import colorReducer from './colorReducer';

const rootReducer = combineReducers({
  form: formReducer,
  colorReducer
})

export default rootReducer;