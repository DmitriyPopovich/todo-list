import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import todoReducer from "./reducers/todo-reducer/";
import fakeApiReducer from "./reducers/fakeapi-users-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["todo", "fakeapi"]
};
const rootReducer = combineReducers({
  todo: todoReducer,
  fakeapi: fakeApiReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const createReduxStore = (initialState = {}) => {
  return configureStore({
    reducer: persistedReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
  });
};
export const persistCreator = persistStore;
