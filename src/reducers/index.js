import {combineReducers} from "redux";

import heroes from "./heroes";
import formData from "./form-data";

export default combineReducers({heroes, formData});