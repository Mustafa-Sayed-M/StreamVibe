import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import moviesSlice from "./slices/moviesSlice";
import MovieSlice from "./slices/MovieSlice";
import tvSlice from "./slices/tvSlice";
import SeriesSlice from "./slices/SeriesSlice";
import seasonSlice from "./slices/seasonSlice";
import faqSlice from "./slices/faqSlice";
import plansSlice from "./slices/plansSlice";

export const store = configureStore({
    reducer: {
        app: appSlice,
        movies: moviesSlice,
        movie: MovieSlice,
        tv: tvSlice,
        series: SeriesSlice,
        season: seasonSlice,
        faq: faqSlice,
        plans: plansSlice,
    }
});