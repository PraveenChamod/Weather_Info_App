import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { WEATHER_API_URL } from "../types/APICaller";

const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const units = "metric";

export const api = createApi({
  reducerPath: "weatherApi",
  baseQuery: fetchBaseQuery({ baseUrl: WEATHER_API_URL }),
  tagTypes: ["WeatherInfo"],
  endpoints: (builder) => ({
    getWeatherData: builder.query({
      query: (cityIds) => `?id=${cityIds}&units=${units}&appid=${apiKey}`,
      providesTags: ["WeatherInfo"],
    }),
    refreshWeatherData: builder.mutation({
      query: (cityIds) => `?id=${cityIds}&units=${units}&appid=${apiKey}`,
      invalidates: ["WeatherInfo"],
    }),
  }),
});

export const {
  useGetWeatherDataQuery,
  useRefreshWeatherDataMutation,
} = api;
