import { createSlice, configureStore, createAction } from "@reduxjs/toolkit";
import { reset } from "../action";

const movieSlice = createSlice({
  name: "movie",
  initialState: [],
  reducers: {
    addMovie(state, action) {
      state.push(action.payload);
    },
    removeMovie(state, action) {
      const index = state.indexOf(action.payload);
      // console.log( `state=${state} action=${action.payload} index=${index}`)
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    builder.addCase(reset, (state, action) => {
      // console.log( `state=${state} action=${action.type} `)
      return [];
    });
  },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export const moviesReducer = movieSlice.reducer;
