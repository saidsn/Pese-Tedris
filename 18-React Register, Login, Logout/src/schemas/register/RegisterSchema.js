import * as yup from "yup";

export const registerSchema = yup.object({
  firstName: yup.string().min(3).max(10).required("firstname is required"),
  lastName: yup.string().min(5).max(15).required("lastname is required"),
  username: yup.string().min(3).max(10).required("username is required").nonNullable(),
  email: yup.string().email().required("email is required"),
  password: yup
    .string()
    .required("password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      "Must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character"
    ),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("confirmpassword is required"),
});
