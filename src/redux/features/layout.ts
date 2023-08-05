import { HYDRATE_ACTION_TYPE } from "@/common/constants";
import { RootState } from "@/redux/store";
import { createAction, createSlice } from "@reduxjs/toolkit";

export interface ILayoutState {
  collapseNav?: boolean;
  showReferralModal?: boolean;
  showFeatureRequest?: boolean;
}

// Initial state
const initialState: ILayoutState = {
  collapseNav: false,
  showReferralModal: false,
  showFeatureRequest: false,
};

const hydrate = createAction<RootState>(HYDRATE_ACTION_TYPE);

// Actual Slice
export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    toggleCollapseNav(state) {
      state.collapseNav = !state.collapseNav;
    },
    toggleReferralModal(state) {
      state.showReferralModal = !state.showReferralModal;
    },
    toggleShowFeatureRequest(state) {
      state.showFeatureRequest = !state.showFeatureRequest;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(hydrate, (state, action) => {
      return {
        ...state,
        ...action.payload.layout,
      };
    });
  },
});

export const {
  toggleCollapseNav,
  toggleReferralModal,
  toggleShowFeatureRequest,
} = layoutSlice.actions;

export const selectLayoutState = (state: RootState) => state.layout;

export default layoutSlice.reducer;
