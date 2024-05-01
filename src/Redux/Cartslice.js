import { createSlice } from "@reduxjs/toolkit";
const Cartslice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
       
    },
    reducers:{
        addCart:(state, action)=>{
            state.cart.push(action.payload);
            console.log("cart",action.payload)
            
        },
        removeCart: (state, action)=>{
            // console.log("remove", action.payload)
            // state.cart = state.cart.filter((v)=>{
            //     return v.id !== action.payload.id
            // })
            
        }
    }
})
export const {addCart , removeCart} = Cartslice.actions;
export default Cartslice.reducer;