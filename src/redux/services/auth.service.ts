import { IUser } from "@/types";
import ApiService from "./api.service";
import { setBaseUrl } from "@/common/utils/url.utils";
import { APP_CONFIG } from "@/config";

type LoginUserResponse = {
  auth_token: string;
};

export interface ILoginPayload {
  email?: string;
  password?: string;
}

export interface IRegisterPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const tokenUrl = setBaseUrl("auth/token");
const userUrl = setBaseUrl("auth/users");

export const authService = ApiService.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginUserResponse, ILoginPayload>({
      query: (body) => ({
        url: tokenUrl("login"),
        method: "POST",
        body,
      }),
    }),
    register: build.mutation<LoginUserResponse, IRegisterPayload>({
      query: (body) => ({
        url: userUrl(),
        method: "POST",
        body,
      }),
    }),
    resetPassword: build.mutation<void, { email?: string | null }>({
      query: (body) => ({
        url: userUrl("reset_password"),
        method: "POST",
        body,
      }),
    }),
    resetPasswordConfirm: build.mutation<
      void,
      { uid?: string; token?: string; new_password: string }
    >({
      query: (body) => ({
        url: userUrl("reset_password_confirm"),
        method: "POST",
        body,
      }),
    }),
    resendActivationEmail: build.mutation<void, { email?: string | null }>({
      query: (body) => ({
        url: userUrl("resend_activation"),
        method: "POST",
        body,
      }),
    }),
    updateLoggedInUserInfo: build.mutation<
      void,
      { first_name?: string; last_name: string }
    >({
      query: (body) => ({
        url: userUrl("me"),
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["User"],
    }),
    getLoggedInUserInfo: build.query<IUser, void>({
      query: () => ({
        url: userUrl("me"),
      }),
      providesTags: ["User"],
    }),
    changePassword: build.mutation<
      void,
      { new_password: string; current_password: string }
    >({
      query: (body) => ({
        url: userUrl("set_password"),
        method: "POST",
        body,
      }),
    }),
    logoutCurrentUser: build.mutation<void, void>({
      query: () => ({
        url: tokenUrl("logout"),
        method: "POST",
      }),
    }),
  }),
  overrideExisting: APP_CONFIG.ENVIRONMENT.development,
});

export const {
  endpoints: authServiceEndpoints,
  useLoginMutation,
  useRegisterMutation,
  useGetLoggedInUserInfoQuery,
  useLazyGetLoggedInUserInfoQuery,
  useResendActivationEmailMutation,
  useResetPasswordConfirmMutation,
  useResetPasswordMutation,
  useUpdateLoggedInUserInfoMutation,
  useChangePasswordMutation,
  useLogoutCurrentUserMutation,
} = authService;
