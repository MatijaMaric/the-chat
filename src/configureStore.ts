import { Store, applyMiddleware, createStore, Middleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { RootState, rootReducer } from "./store";

export function configureStore(initialState?: RootState): Store<RootState> {
  const middlewares: Array<Middleware> = [thunk];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(logger);
  }

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  return store;
}
