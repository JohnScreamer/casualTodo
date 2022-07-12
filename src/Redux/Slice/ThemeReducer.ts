import { createSlice } from "@reduxjs/toolkit";

export interface ThemeInit {
    theme: "dark" | "light";
}

const initialState: ThemeInit = {
    theme: localStorage.getItem("theme")
        ? (localStorage.getItem("theme") as "dark" | "light")
        : "light",
};

const Theme = createSlice({
    name: "Theme",
    initialState,
    reducers: {
        toggleTheme(state) {
            state.theme = state.theme === "light" ? "dark" : "light";
        },
    },
});

export default Theme.reducer;
export const { toggleTheme } = Theme.actions;
