import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endpoints } from "../../Api/endpoints";

export const GET_MOVIES_API = createAsyncThunk("movies/GET_MOVIES_API", async () => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints.DISCOVER}${endpoints.MOVIES}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
});
export const GET_MOVIES_GENRES_API = createAsyncThunk("movies/GET_MOVIES_GENRES_API", async () => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints.MOVIES_GENRES}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
});
export const GET_MOVIES_TOP_RATED_API = createAsyncThunk("movies/GET_MOVIES_TOP_RATED_API", async () => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints.MOVIES_TOP_RATED}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
});
export const GET_MOVIES_TRENDING_NOW_API = createAsyncThunk("movies/GET_MOVIES_TRENDING_NOW_API", async () => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints.MOVIES_TRENDING_DAY}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
});

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        // Movies Data:
        moviesData: {
            data: {
                results: [],
                page: 1,
                total_pages: 0,
                total_results: 0
            },
            loading: true,
            error: null
        },
        // Movies Genres Data:
        moviesGenresData: {
            data: {
                genres: []
            },
            loading: true,
            error: null
        },
        // Movies Top Rated Data:
        moviesTopRatedData: {
            data: {
                results: [],
                page: 1,
                total_pages: 0,
                total_results: 0
            },
            loading: true,
            error: null
        },
        // Movies Trending Now Data:
        moviesTrendingNowData: {
            data: {
                results: [],
                page: 1,
                total_pages: 0,
                total_results: 0
            },
            loading: true,
            error: null
        },
        dataFetched: false
    },
    reducers: {
        // Set dataFetched
        setMoviesDataFetched: (state) => {
            state.dataFetched = true;
        }
    },
    extraReducers: (builder) => {
        // Builder Movies Data
        builder.addCase(GET_MOVIES_API.pending, (state) => {
            state.moviesData.loading = true;
        });
        builder.addCase(GET_MOVIES_API.fulfilled, (state, action) => {
            state.moviesData.data = action.payload;
            state.moviesData.loading = false;
        });
        builder.addCase(GET_MOVIES_API.rejected, (state, action) => {
            state.moviesData.loading = false;
            state.moviesData.error = action.error.message;
        });

        // Builder Movies Genres Data
        builder.addCase(GET_MOVIES_GENRES_API.pending, (state) => {
            state.moviesGenresData.loading = true;
        });
        builder.addCase(GET_MOVIES_GENRES_API.fulfilled, (state, action) => {
            state.moviesGenresData.data = action.payload;
            state.moviesGenresData.loading = false;
        });
        builder.addCase(GET_MOVIES_GENRES_API.rejected, (state, action) => {
            state.moviesGenresData.loading = false;
            state.moviesGenresData.error = action.error.message;
        });

        // Builder Movies Top Rated Data
        builder.addCase(GET_MOVIES_TOP_RATED_API.pending, (state) => {
            state.moviesTopRatedData.loading = true;
        });
        builder.addCase(GET_MOVIES_TOP_RATED_API.fulfilled, (state, action) => {
            state.moviesTopRatedData.data = action.payload;
            state.moviesTopRatedData.loading = false;
        });
        builder.addCase(GET_MOVIES_TOP_RATED_API.rejected, (state, action) => {
            state.moviesTopRatedData.loading = false;
            state.moviesTopRatedData.error = action.error.message;
        });

        // Builder Movies Trending Now Data
        builder.addCase(GET_MOVIES_TRENDING_NOW_API.pending, (state) => {
            state.moviesTrendingNowData.loading = true;
        });
        builder.addCase(GET_MOVIES_TRENDING_NOW_API.fulfilled, (state, action) => {
            state.moviesTrendingNowData.data = action.payload;
            state.moviesTrendingNowData.loading = false;
        });
        builder.addCase(GET_MOVIES_TRENDING_NOW_API.rejected, (state, action) => {
            state.moviesTrendingNowData.loading = false;
            state.moviesTrendingNowData.error = action.error.message;
        });
    }
});

export default moviesSlice.reducer;

export const {
    setMoviesDataFetched,
} = moviesSlice.actions;