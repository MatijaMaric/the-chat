import { ThunkAction } from "redux-thunk";
import { RootState, RootAction } from "../store";

export type BaseThunkAction<T> = ThunkAction<T, RootState, void, RootAction>;
