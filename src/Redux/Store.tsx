import { combineReducers, createStore } from "redux";
import QRCode_reducer from "./Reducers/QRCode/QRCode_reducer";


let reducers = combineReducers({
    QRCode: QRCode_reducer
});


const store = createStore(reducers)
export type IRootState = ReturnType<typeof reducers>
export default store;
