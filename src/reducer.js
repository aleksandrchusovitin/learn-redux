const initialState = { counter: 0 };

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'INC':
      return ({ ...state, counter: state.counter + 1 });
    case 'DEC':
      return ({ ...state, counter: state.counter - 1 });
    case 'RND':
      return ({ ...state, counter: state.counter * payload });
    default:
      return state;
  }
}

export default reducer;