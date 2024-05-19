import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
  name: "user",
  initialState: { email: "", collection: [] },
  reducers: {
    updateCollection(state, action) {
      state.collection = action.payload;
    },
    updateUser(state, action) {
      state.email = action.payload.email;
      state.collection = action.payload.collection;
    },
  },
});

export default userReducer.reducer;
export const { updateCollection, updateUser } = userReducer.actions;
