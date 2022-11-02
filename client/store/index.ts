import {
  AnyAction,
  configureStore,
  Store,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { reducer, RootState } from "./redusers";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { Context, createWrapper, MakeStore } from "next-redux-wrapper";

/*I used legacy_createStore for learning legacy code in redux*/

const makeStore: MakeStore<Store<RootState>> = (context: Context) =>
  createStore(reducer, applyMiddleware(thunk));

export const wrapper = createWrapper<Store<RootState>>(makeStore, {
  debug: true,
});

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>;
