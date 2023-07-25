import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  myArray: [],
};
const mySlice = createSlice({
  name: 'appealsReducer',
  initialState,
  reducers: {
    setAppealsArray: (state, action) => {
      state.myArray = action.payload;
    },
    deleteAppealsItem: (state, action) => {
      const itemId = action.payload;
      state.myArray = state.myArray.filter(item => item.name !== itemId);
    },
  },
});

export const { setAppealsArray,deleteAppealsItem } = mySlice.actions;
export default mySlice.reducer;
