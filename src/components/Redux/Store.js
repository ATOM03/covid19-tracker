import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import HeaderReducer from "./HeaderReducer";

const rootReducer = combineReducers({
  header: HeaderReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancer()
  // compose(),
  // // applyMiddleware(sagaMiddleware),
  // window.__REDUX_DEVTOOLS_EXTENSION__()
);
// sagaMiddleware.run(rootSaga);

export default store;
