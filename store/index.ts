import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice';
import counterReducer from '../features/counter/counterSlice';

const store = configureStore({
  reducer: {
    todo: todoReducer, // Include the todoReducer here
    counter: counterReducer, // Include the counterReducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
