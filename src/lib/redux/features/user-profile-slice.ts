import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface UserProfileState {
  name: string;
  email: string;
}

const initialState: UserProfileState = {
  name: "",
  email: "",
};

export const UserProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {},
});

// export const {  } = UserProfileSlice.actions;

export default UserProfileSlice.reducer;
