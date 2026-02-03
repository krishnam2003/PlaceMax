// src/redux/store.jsx
import { configureStore } from '@reduxjs/toolkit';
import companyReducer from './companySlice.jsx';

export const store = configureStore({
  reducer: {
    companies: companyReducer,
    // Add other reducers here if needed
  },
});

export default store;