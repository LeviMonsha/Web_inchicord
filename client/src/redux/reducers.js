const initialState = {
  user: null,
  messages: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "FETCH_MESSAGES":
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
