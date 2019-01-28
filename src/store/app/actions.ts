import { createAction, createStandardAction } from "typesafe-actions";
import { User } from "../../common/models";

export const initializeApp = createAction("@App/INITIALIZE");
export const setAuthState = createStandardAction("@App/SET_AUTH_STATE")<User>();
