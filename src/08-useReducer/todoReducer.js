export const todoReducer = (initialState = [], action = "") => {
  switch (action.type) {
    // case "ABC":
    //   throw new Error("Action.type=ABC is not implemented");
    case "add":
      return [...initialState, action.payload];
    case "delete":
      return initialState.filter((item) => item.id !== action.payload);
    case "toggle-state":
      return initialState.map((item) => ({
        ...item,
        done: item.id === action.payload ? !item.done : item.done,
      }));
    default:
      return initialState;
  }
};
