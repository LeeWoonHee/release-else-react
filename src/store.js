import { createStore } from 'redux';

const SET_SELECTED_INDEX = 'SET_SELECTED_INDEX';

export const setSelectedIndex = (index) => ({
  type: SET_SELECTED_INDEX,
  payload: index,
});

const initialState = {
  selectedIndex: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_INDEX:
      return {
        ...state,
        selectedIndex: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;