import * as type from "../actions/type";

const initialState = {
  items: [],
  item: {},
};

export default function postReducers(state = initialState, action) {
  switch (action.type) {
    case type.FETCH_POSTS:
      return {
        ...state,
        items: action.payload,
      };
    case type.NEW_POST:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
}
