import { createSlice } from "@reduxjs/toolkit";

const plansSlice = createSlice({
    name: "plans",
    initialState: {
        plansData: [
            {
                name: "Basic",
                content: "Access to a wide selection of movies and shows, including some new releases.",
                priceMonthly: 9.99,
                priceYearly: 119.99,

                hdr: "no",
                devices: "Watch on one device simultaneously",
                freeTrail: "7 Days",
                cancelAnytime: "Yes",
                dolbyAtmos: "No",
                addFree: "No",
                offlineViewing: "No",
                familySharing: "No",

            },
            {
                name: "Standard",
                content: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
                priceMonthly: 12.99,
                priceYearly: 1112.99,

                hdr: "Yes",
                devices: "Watch on Two device simultaneously",
                freeTrail: "7 Days",
                cancelAnytime: "Yes",
                dolbyAtmos: "Yes",
                addFree: "Yes",
                offlineViewing: "Yes, for select titles.",
                familySharing: "Yes, up to 5 family members.",
            },
            {
                name: "Premium",
                content: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
                priceMonthly: 14.99,
                priceYearly: 1114.99,

                hdr: "Yes",
                devices: "Watch on Four device simultaneously",
                freeTrail: "7 Days",
                cancelAnytime: "Yes",
                dolbyAtmos: "Yes",
                addFree: "Yes",
                offlineViewing: "Yes, for all titles.",
                familySharing: "Yes, up to 6 family members.",
            },
        ]
    }
});

export default plansSlice.reducer;