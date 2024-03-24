import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "large",
};

export const deviceSlice = createSlice({
  name: "device",
  initialState,
  reducers: {
    typeOfDevice: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { typeOfDevice } = deviceSlice.actions;

export default deviceSlice.reducer;
