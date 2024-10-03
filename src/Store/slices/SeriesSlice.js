import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endpoints } from "../../Api/endpoints";

export const GET_SERIES_API = createAsyncThunk("series/GET_SERIES_API", async (seriesId) => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints.TV}/${seriesId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
});

export const GET_SERIES_IMAGES_API = createAsyncThunk("movie/GET_SERIES_IMAGES_API", async (movieId) => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints.TV}/${movieId}${endpoints.IMAGES}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
});

export const GET_SERIES_REVIEWS_API = createAsyncThunk("series/GET_SERIES_REVIEWS_API", async (seriesId) => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints.TV}/${seriesId}${endpoints.REVIEWS}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
});

const seriesSlice = createSlice({
    name: "series",
    initialState: {
        // Series Data:
        seriesData: {
            data: {},
            loading: false,
            error: null
        },
        // Series Images Data:
        seriesImagesData: {
            data: {
                logos: [],
                backdrops: [],
                posters: [],
            },
            loading: true,
            error: null
        },
        // Series Reviews Data:
        seriesReviewsData: {
            data: {
                id: null,
                page: 1,
                result: [],
                total_pages: 0,
                total_results: 0
            },
            loading: true,
            error: null
        },
    },
    extraReducers: (builder) => {
        // Series Data:
        builder.addCase(GET_SERIES_API.pending, (state) => {
            state.seriesData.loading = true;
        });
        builder.addCase(GET_SERIES_API.fulfilled, (state, action) => {
            state.seriesData.data = action.payload;
            state.seriesData.loading = false;
        });
        builder.addCase(GET_SERIES_API.rejected, (state, action) => {
            state.seriesData.loading = false;
            state.seriesData.error = action.error.message;
        });

        // Series Images Data:
        builder.addCase(GET_SERIES_IMAGES_API.pending, (state) => {
            state.seriesImagesData.loading = true;
        });
        builder.addCase(GET_SERIES_IMAGES_API.fulfilled, (state, action) => {
            state.seriesImagesData.data = action.payload;
            state.seriesImagesData.loading = false;
        });
        builder.addCase(GET_SERIES_IMAGES_API.rejected, (state, action) => {
            state.seriesImagesData.loading = false;
            state.seriesImagesData.error = action.error.message;
        });

        // Series Reviews Data:
        builder.addCase(GET_SERIES_REVIEWS_API.pending, (state) => {
            state.seriesReviewsData.loading = true;
        });
        builder.addCase(GET_SERIES_REVIEWS_API.fulfilled, (state, action) => {
            state.seriesReviewsData.data = action.payload;
            state.seriesReviewsData.loading = false;
        });
        builder.addCase(GET_SERIES_REVIEWS_API.rejected, (state, action) => {
            state.seriesReviewsData.loading = false;
            state.seriesReviewsData.error = action.error.message;
        });
    }
});

export default seriesSlice.reducer;