import {combineReducers} from "redux";
import { reducer as form } from "redux-form";

import heroes from "./heroes";
import stepIndex from "./step-index";

export default combineReducers({heroes, form, stepIndex});