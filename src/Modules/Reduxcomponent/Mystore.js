import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./Myaction";

export const Mystore= configureStore({
    reducer: {
        counter: counterSlice,}
}) 