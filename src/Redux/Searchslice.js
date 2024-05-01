import { createSlice } from "@reduxjs/toolkit";
const Searchslice = createSlice({
    name:"search",
    initialState:{
        // title:null,
        // story:null
        search:["client", "code", "subscribe", "like"],
       
    },
    reducers:{
        addSearch:(state, action)=>{
            state.search.push(action.payload);
            console.log("d", action.payload)
        },
        
    }
})
export const {addSearch} = Searchslice.actions;
export default Searchslice.reducer;