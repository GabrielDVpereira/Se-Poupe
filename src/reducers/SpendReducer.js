export const spendReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SPEND':
      return [...action.spend, ...state];
    default:
      return state;
  }
};
