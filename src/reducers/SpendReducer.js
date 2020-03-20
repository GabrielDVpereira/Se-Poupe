export const spendReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SPEND':
      console.log('new spend!', action.spend);
      return [action.spend, ...state];
    default:
      return action.spend;
  }
};
