import { configureStore } from '@reduxjs/toolkit';
import pumpReducer from './slices/pumpSelectedSlice';

const store = configureStore({
  reducer: {
    pump: pumpReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
