import { configureStore } from "@reduxjs/toolkit";
import UserProfileSlice from "./slices/user-profile-slice";

export const store = configureStore({
  reducer: {
    userProfile: UserProfileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
