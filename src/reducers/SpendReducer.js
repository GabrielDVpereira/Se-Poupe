export const spendReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SPEND':
      return [action.spend, ...state];
    case 'ORDER':
      return action.spendOrderd;
    default:
      return action.spend;
  }
};
