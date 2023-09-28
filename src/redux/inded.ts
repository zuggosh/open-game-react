import cardReducer from "./cards/cardReducer";
import { configureStore } from '@reduxjs/toolkit'

export interface IConfigureStore {
    cardReducer: any;
}

export default configureStore({
    reducer: {
        cardReducer
    },
})
