import { configureStore} from "@reduxjs/toolkit";
import blockReducer from "./blockSlice.js";
import txsReducer from "./slice/txSlice.js";

export default configureStore({
    reducer: {
        blockStream: blockReducer,
        txStream: txsReducer
    },
});