import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  myArray: [],
};
const mySlice = createSlice({
  name: 'commentsReducer',
  initialState,
  reducers: {
    setCommentsArray: (state, action) => {
      state.myArray = action.payload;
    },
    deleteCommentsItem: (state, action) => {
      const itemId = action.payload;
      state.myArray = state.myArray.filter(item => item.name !== itemId);
    },
  },
});

export const { setCommentsArray,deleteCommentsItem } = mySlice.actions;
export default mySlice.reducer;
