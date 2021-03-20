import produce from 'immer';

const INITIAL_STATE = {
  pets: [],
  filtered: false
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@pets/LOADING_SUCCESS': {
        draft.pets = action.payload.data;
        draft.filtered = false;
        break;
      }
      case '@user/FILTERED_PETS_SUCCESS': {
        draft.pets = action.payload.data;
        draft.filtered = true;
        break;
      }
      default:
    }
  });
}
