import { combineReducers,configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import alertsSlice from "./alertsSlice";

const rootReducer = combineReducers({
    user:userSlice,
    alerts:alertsSlice,

})

const store= configureStore({
    reducer:rootReducer
});

export default store;