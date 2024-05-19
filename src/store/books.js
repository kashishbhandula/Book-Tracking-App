import { createSlice } from "@reduxjs/toolkit";
const booksReducer = createSlice({
  name: "books",
  initialState: {value:{}, search:"q"},
  reducers: {
    updateBooks(state, action) {
      state.value = action.payload;
    },
	updateSearch(state, action) {
      state.search = action.payload;
    },
  },
});

export default booksReducer.reducer;
export const { updateBooks, updateSearch } = booksReducer.actions;
