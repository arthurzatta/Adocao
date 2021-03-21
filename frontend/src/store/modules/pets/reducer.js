import produce from 'immer';

const INITIAL_STATE = {
  pets: [],
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@pets/LOADING_SUCCESS': {
        draft.pets = action.payload.data;
        break;
      }
      case '@pets/FILTERED_PETS_SUCCESS': {
        draft.pets = action.payload.data;
        break;
      }
      default:
    }
  });
}
