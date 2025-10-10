import * as yup from "yup";

export const loginSchema = yup.object({
  username: yup.string().min(3).max(10).required("username is required"),
  password: yup.string().min(8).required("password is required"),
});
