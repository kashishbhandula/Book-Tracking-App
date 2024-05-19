import { createSlice } from "@reduxjs/toolkit";
const booksReducer = createSlice({
  name: "books",
  initialState: { value: {}, search: "q", isSearching: true },
  reducers: {
    updateBooks(state, action) {
      state.value = action.payload;
    },
    updateSearch(state, action) {
      state.search = action.payload;
      state.isSearching = true;
    },
    updateIsSearching(state, action) {
      state.isSearching = action.payload;
    },
  },
});

export default booksReducer.reducer;
export const { updateBooks, updateSearch , updateIsSearching} = booksReducer.actions;
