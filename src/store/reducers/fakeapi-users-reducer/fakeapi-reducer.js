import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { onUserRemove } from "./actions";
import { _transformPersons } from "./transform-data-helpers";

export const fetchUsers = createAsyncThunk(
  "fakeapi/fetchUsers",
  async function (_, { rejectWithValue }) {
    try {
      const resp = await fetch(
        "https://jsonplaceholder.typicode.com/users?_limit=2"
      );
      if (!resp.ok) throw new Error("Error loading...");
      const data = await resp.json();
      return _transformPersons(data);
      // dispatch(setUsers(_transformPersons(data)))
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
export const deleteUser = createAsyncThunk(
  "todos/deleteTodo",
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const resp = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" }
        }
      ); //body: JSON.stringify(data)
      if (!resp.ok) throw new Error("Can't delete user");
      dispatch(removeUser(id));
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};

const fakeApiSlice = createSlice({
  name: "fakeapi",
  initialState: null,
  reducers: {
    // setUsers: (state, action) => {
    //   state.items = action.payload;
    // },
    removeUser: (state, action) => {
      onUserRemove(state, action);
    }
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = "loading";
      state.error = false;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.error = false;
      state.users = action.payload;
    },
    [fetchUsers.rejected]: setError,
    [deleteUser.rejected]: setError
  }
});
export const { setUsers, removeUser } = fakeApiSlice.actions;
export default fakeApiSlice.reducer;
