import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endpoints } from '../../Api/endpoints';

export const SEARCH_API = createAsyncThunk('search/SEARCH_API', async (queryParams) => {
    try {

        const { page, type, year, query } = queryParams;

        const res = await fetch(`${endpoints.BASE_URL}${endpoints.SEARCH}/${type}?query=${query}&page=${page}&year=${year}&api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
});

const searchSlice = createSlice({
    name: 'search',
    initialState: {
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0,
        error: null,
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(SEARCH_API.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(SEARCH_API.fulfilled, (state, action) => {
            return state = { ...action.payload, loading: false, error: null }
        });
        builder.addCase(SEARCH_API.rejected, (state, action) => {
            return state = { ...state, loading: false, error: action.error.message }
        });
    }
});

export default searchSlice.reducer;