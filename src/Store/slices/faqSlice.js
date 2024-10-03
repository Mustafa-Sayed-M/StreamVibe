import { createSlice } from "@reduxjs/toolkit";

const faqSlice = createSlice({
    name: "faq",
    initialState: {
        faqData: [
            {
                id: 1,
                question: "How can I search for a movie or TV show?",
                answer: "You can use the search bar at the top to find your favorite movies and TV shows."
            },
            {
                id: 2,
                question: "How often is the content updated?",
                answer: "Our content is updated daily to include the latest releases and trending titles."
            },
            {
                id: 3,
                question: "Do I need to create an account to watch movies?",
                answer: "Yes, creating an account is necessary to access the entire library of movies and shows."
            },
            {
                id: 4,
                question: "Is there a free trial available?",
                answer: "Yes, we offer a 7-day free trial for new users to explore our platform."
            },
            {
                id: 5,
                question: "Can I watch content offline?",
                answer: "Currently, offline viewing is not available. An active internet connection is required for streaming."
            },
            {
                id: 6,
                question: "How many devices can I stream on at once?",
                answer: "With a premium account, you can stream on up to 3 devices simultaneously."
            },
            {
                id: 7,
                question: "Are subtitles available for all shows?",
                answer: "Yes, most of our movies and TV shows have subtitle options in multiple languages."
            },
            {
                id: 8,
                question: "How do I cancel my subscription?",
                answer: "You can cancel your subscription at any time via the account settings page."
            }
        ]
    }
});

export default faqSlice.reducer;