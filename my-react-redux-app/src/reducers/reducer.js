export default (state, action) => {
  switch (action.type) {
    case "fetch":
      return {
        ...state, rotating: action.payload
      };
    case "add":
      return {
        ...state, url: [...state.url, action.dog]
      };
    default:
      return state;
  }
};
