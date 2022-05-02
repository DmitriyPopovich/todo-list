import { current } from "@reduxjs/toolkit";

export const onUserRemove = (state, action) => {
  state.users = state.users.filter((item) => item.id !== action.payload);
};

const getUserFromId = (state, action) => {
  return state.users.find(item => item.id === action.payload)
}

export const onAddInCart = (state, action) => {
  const user_for_add = getUserFromId(state, action)
  const cart_list = state.cartUsers
  const active_cart_item = cart_list.find(item => item.id === action.payload)
  if(active_cart_item) active_cart_item.count += 1
  else {
    const data = {
      id: user_for_add.id,
      name: user_for_add.name,
      count: 1
    }
    cart_list.push(data)
  }
};
