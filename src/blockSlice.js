import { createSlice } from "@reduxjs/toolkit";

export const blockSlice = createSlice({
    name: "blockStream",
    initialState: {
        hash: [],
        number: [],
        miner: [],
    },
    reducers:{
        updateHash: (state,action) => {
            state.hash = action.payload;
        },
        updateNumber: (state,action) => {
            state.number = action.payload;
        },
        updateMiner: (state,action)=>{
            state.miner = action.payload;
        }
    }
});

export const {updateHash,updateNumber,updateMiner} = blockSlice.actions;
export default blockSlice.reducer;