import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import PhoneNumber_reducer from "./Reducers/PhoneNumber/PhoneNumber_reducer";
import QRCode_reducer from "./Reducers/QRCode/QRCode_reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

let reducers = combineReducers({
  QRCode: QRCode_reducer,
  Number: PhoneNumber_reducer,
});

export type IRootState = ReturnType<typeof reducers>;

const composeEnhancers =
  (window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] as typeof compose) || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;
