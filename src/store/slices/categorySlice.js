import { createSlice } from "@reduxjs/toolkit";

const categorySlice=createSlice({
    name:'category',
    initialState:{
        categoryList:[]
    },
    reducers:{
        setCategories:(state,action)=>{
            state.categoryList=action.payload;
        }
    }
})

export default categorySlice.reducer;
