import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endpoints } from "../../Api/endpoints";

export const GET_TV_API = createAsyncThunk("tv/GET_TV_API", async () => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints.DISCOVER}${endpoints.TV}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
});
export const GET_TV_GENRES_API = createAsyncThunk("tv/GET_TV_GENRES_API", async () => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints.TV_GENRES}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
});
export const GET_TV_TOP_RATED_API = createAsyncThunk("tv/GET_TV_TOP_RATED_API", async () => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints.TV_TOP_RATED}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
});
export const GET_TV_TRENDING_NOW_API = createAsyncThunk("tv/GET_TV_TRENDING_NOW_API", async () => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints.TV_TRENDING_DAY}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
});

const tvSlice = createSlice({
    name: "tv",
    initialState: {
        // Tv Data:
        tvData: {
            data: {
                results: [],
                page: 1,
                total_pages: 0,
                total_results: 0
            },
            loading: true,
            error: null
        },
        // Tv Genres Data:
        tvGenresData: {
            data: {
                genres: []
            },
            loading: true,
            error: null
        },
        // Tv Top Rated Data:
        tvTopRatedData: {
            data: {
                results: [],
                page: 1,
                total_pages: 0,
                total_results: 0
            },
            loading: true,
            error: null
        },
        // Tv Trending Now Data:
        tvTrendingNowData: {
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
        setTvDataFetched: (state) => {
            state.dataFetched = true;
        }
    },
    extraReducers: (builder) => {
        // Builder Movies Data
        builder.addCase(GET_TV_API.pending, (state) => {
            state.tvData.loading = true;
        });
        builder.addCase(GET_TV_API.fulfilled, (state, action) => {
            state.tvData.data = action.payload;
            state.tvData.loading = false;
        });
        builder.addCase(GET_TV_API.rejected, (state, action) => {
            state.tvData.loading = false;
            state.tvData.error = action.error.message;
        });

        // Builder Movies Genres Data
        builder.addCase(GET_TV_GENRES_API.pending, (state) => {
            state.tvGenresData.loading = true;
        });
        builder.addCase(GET_TV_GENRES_API.fulfilled, (state, action) => {
            state.tvGenresData.data = action.payload;
            state.tvGenresData.loading = false;
        });
        builder.addCase(GET_TV_GENRES_API.rejected, (state, action) => {
            state.tvGenresData.loading = false;
            state.tvGenresData.error = action.error.message;
        });

        // Builder Movies Top Rated Data
        builder.addCase(GET_TV_TOP_RATED_API.pending, (state) => {
            state.tvTopRatedData.loading = true;
        });
        builder.addCase(GET_TV_TOP_RATED_API.fulfilled, (state, action) => {
            state.tvTopRatedData.data = action.payload;
            state.tvTopRatedData.loading = false;
        });
        builder.addCase(GET_TV_TOP_RATED_API.rejected, (state, action) => {
            state.tvTopRatedData.loading = false;
            state.tvTopRatedData.error = action.error.message;
        });

        // Builder Movies Trending Now Data
        builder.addCase(GET_TV_TRENDING_NOW_API.pending, (state) => {
            state.tvTrendingNowData.loading = true;
        });
        builder.addCase(GET_TV_TRENDING_NOW_API.fulfilled, (state, action) => {
            state.tvTrendingNowData.data = action.payload;
            state.tvTrendingNowData.loading = false;
        });
        builder.addCase(GET_TV_TRENDING_NOW_API.rejected, (state, action) => {
            state.tvTrendingNowData.loading = false;
            state.tvTrendingNowData.error = action.error.message;
        });
    }
});

export default tvSlice.reducer;

export const {
    setTvDataFetched,
} = tvSlice.actions;