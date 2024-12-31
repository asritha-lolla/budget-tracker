import { combineReducers } from "@reduxjs/toolkit";
import categoryReducer from "./slices/categorySlice";
import { api } from "./services/api";


const rootReducer = combineReducers({
    categories:categoryReducer,
    [api.reducerPath]:api.reducer

})

export default rootReducer;