import {combineReducers} from "redux";

import heros from "./heros";
import formData from "./form-data";

export default combineReducers({heros, formData});