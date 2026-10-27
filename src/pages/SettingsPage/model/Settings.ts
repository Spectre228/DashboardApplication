import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Settings {
    value: {
        showBarchart: boolean,
        showRadarcharts: boolean,
    }
};

const initialState: Settings = {
    value: {
        showBarchart: true,
        showRadarcharts: true,
    }
};

const settingsSlice = createSlice(
    {
        name: "settingsSlice",
        initialState,
        reducers: {
            toggleBarchartShow: (state, action: PayloadAction<boolean>) => {
                state.value.showBarchart = action.payload;
            },
            toggleRadarchartsShow: (state, action: PayloadAction<boolean>) => {
                state.value.showRadarcharts = action.payload;
            },
        }
    }
);

export const { toggleBarchartShow, toggleRadarchartsShow } = settingsSlice.actions;
export default settingsSlice.reducer;