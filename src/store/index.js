import { createSlice, configureStore, createAction } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/movieSlice";
import { reset } from "./action";
const store = configureStore({
  reducer: {
    song: songsReducer,
    movie: moviesReducer,
  },
});

export { store, reset };
export { addSong, removeSong, addMovie, removeMovie };
