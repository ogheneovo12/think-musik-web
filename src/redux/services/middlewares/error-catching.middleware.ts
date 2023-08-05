import { isRejectedWithValue } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

/**
 * Log a warning and show a toast!
 */

const ignoreEndpoints = ["register", "logoutCurrentUser"];

export const rtkQueryErrorLogger = () => (next: any) => (action: any) => {
  let serverMessage = "Oops!! an error Ocurred";

  // RTK Query uses `createAsyncThunk` from redux-toolkit under the hood, so we're able to utilize these use matchers!
  if (isRejectedWithValue(action)) {
    if (
      action.type === "api/executeMutation/rejected" &&
      ignoreEndpoints.includes(action?.meta?.arg?.endpointName)
    ) {
      return;
    }

    serverMessage =
      action?.payload?.data?.message?.message || action?.payload?.data?.message;
    serverMessage = Array.isArray(serverMessage)
      ? serverMessage?.join(", ")
      : serverMessage;

    if (action?.payload?.status === "FETCH_ERROR") {
      toast.error(
        "Network Error,Please check that you have active internet connection"
      );
    } else {
      toast.error(
        serverMessage ||
          action.payload?.data?.error ||
          action?.error?.message ||
          action?.payload?.data?.message?.message ||
          "OopS! something went wrong"
      );
    }
  }

  return next(action);
};
