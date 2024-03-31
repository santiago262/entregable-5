import { createSlice } from '@reduxjs/toolkit';

export const trainerSlice = createSlice({
    name: 'triner',
    initialState: "",
    reducers: {
        setTrainer: (state,action)=> [...state,action.payload]

    }
})

export const { setTrainer } = trainerSlice.actions;

export default trainerSlice.reducer;