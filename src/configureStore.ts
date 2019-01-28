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

  let enchancers = applyMiddleware(...middlewares);
  if (process.env.NODE_ENV !== "production") {
    enchancers = composeWithDevTools(enchancers);
  }

  const store = createStore(rootReducer, initialState, enchancers);

  return store;
}
