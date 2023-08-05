import { APP_CONFIG } from "@/config/index";
import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import { ApiService, rtkQueryErrorLogger } from "./services";
import { appSlice, layoutSlice, logOutCurrentUser } from "@/redux/features";
import localforage from "localforage";
import { HYDRATE_ACTION_TYPE } from "@/common/constants";

// Define a list of reducer keys to exclude from persisting (blacklist)
const persistBlacklist: string[] = [ApiService.reducerPath];

const appReducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
  [layoutSlice.name]: layoutSlice.reducer,
  [ApiService.reducerPath]: ApiService.reducer,
});

const rootReducer = (state: any, action: AnyAction) => {
  if (action?.type === logOutCurrentUser.type) {
    localforage.removeItem("reduxState");
    state = {};
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST"],
        ignoredPaths: persistBlacklist,
      },
    }).concat(rtkQueryErrorLogger, ApiService.middleware),
  devTools: APP_CONFIG.ENVIRONMENT.development,
});

// Function to persist Redux state to localStorage
const persistState = () => {
  try {
    let state = store.getState();

    // Exclude blacklisted reducers from persisted state
    const persistedState = JSON.stringify(
      Object.entries(state).reduce((acc, [key, value]) => {
        if (!persistBlacklist.includes(key)) {
          acc[key] = value;
        }
        return acc;
      }, {} as { [index: string]: any })
    );

    // Subscribe to store changes to ensure that the serialized state is always up-to-date
    store.subscribe(() => {
      state = store.getState();
    });

    localforage.setItem("reduxState", persistedState);
  } catch (error) {
    // Handle any errors that occur during serialization or storage
    console.error("Error persisting state:", error);
  }
};

// Subscribe to store changes and persist state to local storage
store.subscribe(persistState);

// Initialize Redux store with the persisted state from local storage (if available)
export const loadPersistedState = async () => {
  if (typeof window !== "undefined") {
    try {
      const persistedState = await localforage.getItem<string>("reduxState");
      if (persistedState) {
        store.dispatch({
          type: HYDRATE_ACTION_TYPE,
          payload: JSON.parse(persistedState),
        });
      }
    } catch (error) {
      // Handle any errors that occur during retrieval or deserialization
      console.error("Error loading persisted state:", error);
    }
  }
};

loadPersistedState();

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action
>;
export type AppDispatch = AppStore["dispatch"];
