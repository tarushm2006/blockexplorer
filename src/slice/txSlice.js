import { createSlice } from "@reduxjs/toolkit";

export const txSlice = createSlice({
    name: "txStream",
    initialState: {
        txs: [],
    },
    reducers: {
        updateTxs: (state,action) => {
            state.txs = action.payload
        }
    }
});

export const { updateTxs } = txSlice.actions;
export default txSlice.reducer;