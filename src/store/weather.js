import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./apiStatus";
import { createSelector } from "reselect";
const slice = createSlice({
  name: "weather",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    weatherRequested: (weather, action) => {
      weather.loading = true;
    },

    weatherReceived: (weather, action) => {
      weather.list = action.payload;
      weather.loading = false;
      weather.lastFetch = Date.now();
    },

    weatherRequestFailed: (weather, action) => {
      weather.loading = false;
    },
  },
});

export const { weatherReceived, weatherRequested, weatherRequestFailed } =
  slice.actions;
export default slice.reducer;

// Action Creators
//const url = "/bugs";

export const loadWeather = () => (dispatch, getState) => {
  return dispatch(
    apiCallBegan({
      // url,
      onStart: weatherRequested.type,
      onSuccess: weatherReceived.type,
      onError: weatherRequestFailed.type,
    })
  );
};

//selector
const selectWeather = (state) => state.entites.weather;
export const getWeather = createSelector(
  [selectWeather],
  (weather) => {
    return weather.filter((w) => w.status);
  }

  //weather =>  weather.filter(g => g)
);
