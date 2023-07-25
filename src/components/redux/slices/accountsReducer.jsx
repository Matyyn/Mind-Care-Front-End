import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myArray: [],
};

const mySlice = createSlice({
  name: 'accountsReducer',
  initialState,
  reducers: {
    setArray: (state, action) => {
      state.myArray = action.payload;
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.myArray = state.myArray.filter(item => item.name !== itemId);
    },
  },
});

export const { setArray,deleteItem } = mySlice.actions;
export default mySlice.reducer;
