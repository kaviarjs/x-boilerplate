import { IRoute } from "@kaviar/x-ui";
import { ChangePassword } from "./ChangePassword";
import { Login } from "./Login";
import { ForgotPassword } from "./ForgotPassword";
import { ResetPassword } from "./ResetPassword";
import { VerifyEmail } from "./VerifyEmail";
import { Register } from "./Register";

export const LOGIN: IRoute = {
  path: "/login",
  component: Login,
};

export const CHANGE_PASSWORD: IRoute = {
  path: "/change-password",
  component: ChangePassword,
};

export const FORGOT_PASSWORD: IRoute = {
  path: "/forgot-password",
  component: ForgotPassword,
};

export const RESET_PASSWORD: IRoute<{ token: string }> = {
  path: "/reset-password/:token",
  component: ResetPassword,
};

export const VERIFY_EMAIL: IRoute<{ token: string }> = {
  path: "/verify-email/:token",
  component: VerifyEmail,
};

export const REGISTER: IRoute = {
  path: "/register",
  component: Register,
};
