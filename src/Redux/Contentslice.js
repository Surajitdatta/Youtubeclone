import { createSlice } from "@reduxjs/toolkit";
const Contentslice = createSlice({
    name:"img",
    initialState:{
        // title:null,
        // story:null
        content:[],
       
    },
    reducers:{
        addContent:(state, action)=>{
            state.content.push(action.payload);
            // console.log("d", action.payload)
        },
        removeContent: (state, action)=>{
            
        }
    }
})
export const {addContent , removeContent} = Contentslice.actions;
export default Contentslice.reducer;