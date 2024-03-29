import { createSlice } from "@reduxjs/toolkit";

const imgSlice = createSlice({
    name:"img",
    initialState: {
        imgLogo: [],
    },
    reducers:{
        addImage: (state,action) => {
            state.imgLogo = action.payload;
        }
    }
})

export const {addImage} = imgSlice.actions;

export default imgSlice.reducer;