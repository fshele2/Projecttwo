import { configureStore } from "@reduxjs/toolkit";
import { AppState } from "./types";
import reducer from "../reducer";


    // handle the action and return new state

const state:AppState = {
    user: {
        id:0,
        username:"",
        password:""
    },
    
}


export const store = configureStore({
    reducer

})
