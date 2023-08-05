import { IUser } from "@/types";
import { clearTokens, setAccessToken } from "@/common/utils/token.utils";
import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
import { HYDRATE_ACTION_TYPE } from "@/common/constants";
import { authServiceEndpoints } from "../services/auth.service";

export interface IAppState {
  user?: IUser | null;
}

// Initial state
const initialState: IAppState = {
  user: null,
};

const hydrate = createAction<RootState>(HYDRATE_ACTION_TYPE);

// Actual Slice
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, token },
      }: PayloadAction<{ user: IUser; token: string }>
    ) => {
      state.user = user;
      setAccessToken(token);
    },
    logOutCurrentUser: (state) => {
      state.user = null;
      clearTokens();
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(hydrate, (state, action) => {
        return {
          ...state,
          ...action.payload.app,
        };
      })
      .addMatcher(
        authServiceEndpoints.login.matchFulfilled,
        (state, { payload }) => {
          setAccessToken(payload.auth_token);
        }
      )
      .addMatcher(
        authServiceEndpoints.getLoggedInUserInfo.matchFulfilled,
        (state, { payload }) => {
          state.user = payload;
        }
      );
  },
});

export const { setCredentials, logOutCurrentUser } = appSlice.actions;

export const selectCurrentUser = (state: RootState) => state.app.user;

export default appSlice.reducer;
