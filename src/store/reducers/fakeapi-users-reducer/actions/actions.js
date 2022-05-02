export const onUserRemove = (state, action) => {
  state.users = state.users.filter((item) => item.id !== action.payload);
};
export const onAddInCart = (state, action) => {
  state.cartUsers.push(action.payload);
  state.more += 1;
};
