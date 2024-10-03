import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endpoints } from "../../Api/endpoints";

export const GET_MOVIE_API = createAsyncThunk("movie/GET_MOVIE_API", async (movieId) => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints.MOVIES}/${movieId}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
});

export const GET_MOVIE_IMAGES_API = createAsyncThunk("movie/GET_MOVIE_IMAGES_API", async (movieId) => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints.MOVIES}/${movieId}${endpoints.IMAGES}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
});

export const GET_MOVIE_REVIEWS_API = createAsyncThunk("movie/GET_MOVIE_REVIEWS_API", async (movieId) => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints.MOVIES}/${movieId}${endpoints.REVIEWS}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
});

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        // Movie Data:
        movieData: {
            data: {},
            loading: true,
            error: null
        },
        // Movie Images Data:
        movieImagesData: {
            data: {
                logos: [],
                backdrops: [],
                posters: [],
            },
            loading: true,
            error: null
        },
        // Movie Reviews Data:
        movieReviewsData: {
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
        // Movie Data:
        builder.addCase(GET_MOVIE_API.pending, (state) => {
            state.movieData.loading = true;
        });
        builder.addCase(GET_MOVIE_API.fulfilled, (state, action) => {
            state.movieData.data = action.payload;
            state.movieData.loading = false;
        });
        builder.addCase(GET_MOVIE_API.rejected, (state, action) => {
            state.movieData.loading = false;
            state.movieData.error = action.error.message;
        });

        // Movies Images Data:
        builder.addCase(GET_MOVIE_IMAGES_API.pending, (state) => {
            state.movieImagesData.loading = true;
        });
        builder.addCase(GET_MOVIE_IMAGES_API.fulfilled, (state, action) => {
            state.movieImagesData.data = action.payload;
            state.movieImagesData.loading = false;
        });
        builder.addCase(GET_MOVIE_IMAGES_API.rejected, (state, action) => {
            state.movieImagesData.loading = false;
            state.movieImagesData.error = action.error.message;
        });

        // Movie Reviews Data:
        builder.addCase(GET_MOVIE_REVIEWS_API.pending, (state) => {
            state.movieReviewsData.loading = true;
        });
        builder.addCase(GET_MOVIE_REVIEWS_API.fulfilled, (state, action) => {
            state.movieReviewsData.data = action.payload;
            state.movieReviewsData.loading = false;
        });
        builder.addCase(GET_MOVIE_REVIEWS_API.rejected, (state, action) => {
            state.movieReviewsData.loading = false;
            state.movieReviewsData.error = action.error.message;
        });
    }
});

export default movieSlice.reducer;