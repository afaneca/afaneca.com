import { combineReducers } from "redux";
import LocaleReducer from "./LocaleReducer";


export default combineReducers({
    locale: LocaleReducer
});