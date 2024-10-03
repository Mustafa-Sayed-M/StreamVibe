import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { endpoints } from "../../Api/endpoints";

export const GET_EPISODES_API = createAsyncThunk('season/GET_EPISODES_API', async ({ seriesId, season_number }) => {
    try {
        const res = await fetch(`${endpoints.BASE_URL}${endpoints.TV}/${seriesId}${endpoints.TV_SEASON}/${season_number}?api_key=${process.env.REACT_APP_TMDB_API_KEY}`);
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
});

const seasonSlice = createSlice({
    name: "season",
    initialState: {
        // Season Data:
        seasonData: {
            data: {
                episodes: [],
            },
            loading: true,
            error: null
        },
        seasonOpen: null
    },
    reducers: {
        handleSeasonOpenStore: (state, action) => {
            state.seasonOpen = action.payload;
        },
        resetSeasonDataStore: (state) => {
            state.seasonData = {
                data: {
                    episodes: [],
                },
                loading: true,
                error: null
            }
            state.seasonOpen = null;
        }
    },
    extraReducers: (builder) => {
        // Season Data:
        builder.addCase(GET_EPISODES_API.pending, (state) => {
            state.seasonData.loading = true;
        });
        builder.addCase(GET_EPISODES_API.fulfilled, (state, action) => {
            state.seasonData.data = action.payload;
            state.seasonData.loading = false;
        });
        builder.addCase(GET_EPISODES_API.rejected, (state, action) => {
            state.seasonData.loading = false;
            state.seasonData.error = action.error.message;
        });
    }
});

export default seasonSlice.reducer;

export const { handleSeasonOpenStore, resetSeasonDataStore } = seasonSlice.actions;