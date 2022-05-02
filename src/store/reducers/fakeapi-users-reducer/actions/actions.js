export const onUserRemove = (state, action) => {
  state.users = state.users.filter((item) => item.id !== action.payload);
};
