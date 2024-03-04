import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reduxStore/cartSlice";


const appStore = configureStore({
    reducer:{
        cart: cartReducer
    }
}
);

export default appStore;