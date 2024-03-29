import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reduxStore/cartSlice";
import imgReducer from "../reduxStore/imgSlice";


const appStore = configureStore({
    reducer:{
        cart: cartReducer,
        img: imgReducer,
    }
}
);

export default appStore;