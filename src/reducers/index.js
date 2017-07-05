import {combineReducers} from "redux";

import heroes from "./heroes";
import form from "./form";

export default combineReducers({heroes, form});