import produce from 'immer';

const INITIAL_STATE = {
  user: null,
  loading: false
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_SUCCESS': {
        draft.user = action.payload.user;
        break;
      }
      case '@user/CREATE_USER_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@user/CREATE_USER_SUCCESS': {
        draft.user = action.payload.user;
        loading = false;
        break;
      }
      case '@user/CREATE_USER_FAILURE': {
        draft.user = null;
        draft.loading = false;
        break;
      }
      default:
    }
  });
}
