
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { WEATHER_API_URL } from '../types/APICaller';

import { LRUCache } from 'lru-cache';


const cache = new LRUCache({ max: 500, maxAge: 5 * 60 * 1000 });

export const fetchWeatherData = createAsyncThunk('weather/fetchData', async (cityIds, { rejectWithValue }) => {
  
  const cachedData = cache.get(cityIds);
  if (cachedData) {
    return cachedData;
  }
  
  try {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const response = await fetch(`${WEATHER_API_URL}?id=${cityIds}&appid=${apiKey}`);
    if (!response.ok) {
      throw new Error('Network response was not okay.');
    }
    const data = await response.json();

    cache.set(cityIds, data);
    return data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeatherData.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWeatherData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchWeatherData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default weatherSlice.reducer;
