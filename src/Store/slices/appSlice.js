import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        navbarMenuOpen: false,
        planSelected: "MONTHLY",
        faqOpens: [1]
    },
    reducers: {
        handleNavbarMenuOpen: (state, action) => {
            state.navbarMenuOpen = action.payload;
        },
        selectPlanHandler: (state, action) => {
            state.planSelected = action.payload
        },
        faqOpenHandler: (state, action) => {
            const faqIndex = state.faqOpens.indexOf(action.payload);
            if (faqIndex === -1) {
                state.faqOpens.push(action.payload);
            } else {
                state.faqOpens.splice(faqIndex, 1);
            }
        }
    },
});

export default appSlice.reducer;

export const {
    handleNavbarMenuOpen,
    selectPlanHandler,
    faqOpenHandler
} = appSlice.actions;