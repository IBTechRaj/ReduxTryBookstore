const filter = (state = "All", action) => {
  // console.log(action);
  switch (action.type) {
    case "CHANGE_FILTER":
      console.log(action);
      return action.filter;

    default:
      break;
  }
  return state;
};

export default filter;
