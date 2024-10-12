import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endpoints } from "../../Api/endpoints";

export const GET_TRENDING_API = createAsyncThunk("trending/GET_TRENDING_API", async () => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints.TRENDING}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
        throw err;
    }
});

const trendingSlice = createSlice({
    name: "trending",
    initialState: {
        results: [],
        page: 1,
        total_pages: 0,
        total_results: 0,
        loading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(GET_TRENDING_API.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(GET_TRENDING_API.fulfilled, (state, action) => {
            return state = { ...action.payload, loading: false, error: null }
        });
        builder.addCase(GET_TRENDING_API.rejected, (state, action) => {
            return state = { ...state, loading: false, error: action.error.message }
        });
    }
});

export default trendingSlice.reducer;