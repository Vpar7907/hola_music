import { configureStore } from "@reduxjs/toolkit";
import { Context, MakeStore, createWrapper } from "next-redux-wrapper";
import { Store } from "redux";
import { rootReducer, RootState } from "./redusers";
import { playerReducer } from "./redusers/playerReducer";

const makeStore = (context: Context) =>
  configureStore({ reducer: rootReducer });

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true,
});
