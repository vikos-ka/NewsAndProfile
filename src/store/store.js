import { applyMiddleware, createStore, combineReducers, } from "redux";
import thunkMiddleware from "redux-thunk";
import { verifyAuth } from "./actions/auth";
import authReducer from "./reducers/authReducer";
import newsReducer from "./reducers/newsReducer";


const reducers = combineReducers(
    {
    auth: authReducer,
    news: newsReducer
});


export default function configureStore(persistedState) {
    const store = createStore(
      reducers,
      persistedState,
      applyMiddleware(thunkMiddleware)
    );
    store.dispatch(verifyAuth());
    return store;
  }
