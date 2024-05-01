import { createSlice } from "@reduxjs/toolkit";
const Listslice = createSlice({
    name:"list",
    initialState:{
        // title:null,
        // story:null
        list:"",
       
    },
    reducers:{
        addlist:(state, action)=>{
            state.list = action.payload;
        },
        
    }
})
export const {addlist} = Listslice.actions;
export default Listslice.reducer;