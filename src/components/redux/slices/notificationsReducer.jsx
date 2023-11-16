import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  notifications: null, 
};

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    setnotifications: (state, action) => {
      state.notifications = action.payload;
    },  
  },
});

export const { setnotifications} = notificationsSlice.actions;
export default notificationsSlice.reducer;