import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        navbar: {
            openMenu: false
        },
        imagePreview: {
            preview: false,
            imageData: null
        }
    },
    reducers: {
        handleNavbarMenuStore: (state, action) => {
            state.navbar.openMenu = action.payload;
        },
        handleImagePreviewStore: (state, action) => {
            state.imagePreview = action.payload;
        },
    },
});

export default appSlice.reducer;

export const { handleNavbarMenuStore, handleImagePreviewStore } = appSlice.actions;