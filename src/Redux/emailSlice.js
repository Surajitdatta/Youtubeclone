import { createSlice } from "@reduxjs/toolkit";
const Emailslice = createSlice({
    name:"email",
    initialState:{
        // title:null,
        // story:null
        email:"",
        hide: false
       
    },
    reducers:{
        addEmail: (state, action) => {
            return {
                ...state,
                email: action.payload,
                hide: action.payload.length > 0
            };
        }
        
    }
})
export const {addEmail} = Emailslice.actions;
export default Emailslice.reducer;