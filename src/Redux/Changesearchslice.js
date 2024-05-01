import { createSlice } from "@reduxjs/toolkit";
const Changesearchslice = createSlice({
    name:"change",
    initialState:{
        change:"",
    },
    reducers:{
        addSearchslice:(state, action)=>{
            state.change = action.payload
            // console.log("d", action.payload)
        },
        
    }
})
export const {addSearchslice} = Changesearchslice.actions;
export default Changesearchslice.reducer;