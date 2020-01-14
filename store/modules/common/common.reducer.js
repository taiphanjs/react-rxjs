import { LOADING } from './common.actions';

const initialState = {
  loading: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case LOADING:
      return Object.assign({}, state, {
        loading: true
      });
    default:
      return state;
  }
}

export default reducer;