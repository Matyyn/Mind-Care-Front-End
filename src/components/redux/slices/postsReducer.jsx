import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  myArray: [],
};
const mySlice = createSlice({
  name: 'postsReducer',
  initialState,
  reducers: {
    setPostsArray: (state, action) => {
      state.myArray = action.payload;
    },
    deletePostsItem: (state, action) => {
      const itemId = action.payload;
      state.myArray = state.myArray.filter(item => item.name !== itemId);
    },
  },
});

export const { setPostsArray,deletePostsItem } = mySlice.actions;
export default mySlice.reducer;
