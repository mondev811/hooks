export const todoReducer = (initialState, action) => {
  switch (action.type) {
    // case "ABC":
    //   throw new Error("Action.type=ABC is not implemented");
    case "add":
      return [...initialState, action.payload];
    case "delete":
      return initialState.filter((item) => item.id !== action.payload);
    default:
      return initialState;
  }
};
