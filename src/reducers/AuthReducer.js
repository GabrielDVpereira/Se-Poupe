const authReducer = (state, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        isSignOut: false,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        isLoading: false,
        isSignOut: false,
        userToken: action.token,
      };
    case 'SIGN_OUT':
      return {
        isLoading: false,
        isSignOut: true,
        userToken: null,
      };
    case 'SPLASH':
      return {
        isLoading: true,
      };
    default:
      return state;
  }
};

export default authReducer;
