import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions';

const store = configureStore({
  reducer: {
    mission: missionsReducer,
  },
});
export default store;
