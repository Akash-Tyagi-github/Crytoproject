import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";



const reducers=combineReducers({
    mydata: dataReducer,
})

