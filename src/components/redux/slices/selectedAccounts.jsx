import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null, 
  };
const acceptedAppointmentsSlice = createSlice({
    name: 'acceptedAppointments',
    initialState,
    reducers: {
        addAcceptedAppointment:(state, action) => {
            state.user = action.payload;
          }     
    },
  });

export const { addAcceptedAppointment } = acceptedAppointmentsSlice.actions;

export default acceptedAppointmentsSlice.reducer;
