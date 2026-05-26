import { createSlice } from "@reduxjs/toolkit";

interface BurgerMenuActivation {
    value: boolean
};

const initialState: BurgerMenuActivation = {
    value: false
};

const burgerMenuActivation = createSlice(
    {
        name: "isMenuActive",
        initialState,
        reducers: {
            toggle: (state) => {state.value = !(state.value)}
        }
    }
);

export const { toggle } = burgerMenuActivation.actions;
export default burgerMenuActivation.reducer;