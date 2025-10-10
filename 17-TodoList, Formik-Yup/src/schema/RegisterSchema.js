import * as yup from "yup";

export const registerSchema = yup.object({
  firstName: yup.string().min(3).max(10).required("firstname is required"),
  lastName: yup.string().min(5).max(15).required("lastname is required"),
  username: yup.string().min(3).max(10).required("username is required"),
  email: yup.string().email().required("email is required"),
  password: yup.string().min(8).required("password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("confirmpassword is required"),
});
