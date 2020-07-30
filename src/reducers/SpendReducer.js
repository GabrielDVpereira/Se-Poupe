export const spendReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_SPEND':
      return [action.product, ...state];
    case 'ORDER':
      return action.spendOrderd;
    default:
      return action.products;
  }
};
