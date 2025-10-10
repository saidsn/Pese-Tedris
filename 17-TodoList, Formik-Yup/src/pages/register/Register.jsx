import { useFormik } from "formik";
import "./Register.css";
import axios from "axios";
import { registerSchema } from "../../schema/RegisterSchema";

const Register = () => {
  const { values, handleChange, handleSubmit, resetForm, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: async (values) => {
      await axios.post("http://localhost:3000/users", values);
      resetForm();
    },

    validationSchema: registerSchema,
  });

  let { firstName, lastName, username, email, password, confirmPassword } =
    values;

  return (
    <div className="register-container">
      <form className="register-form" action="" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <div>
          <div className="label-container">
            <label htmlFor="firstName">Name</label>
            {errors.firstName ? <span className="error">{errors.firstName}</span> : null}
          </div>
          <input
            type="text"
            id="firstName"
            onChange={handleChange}
            value={firstName}
            style={errors.firstName ? { borderColor: "red" } : null}
          />
        </div>
        <div>
          <div className="label-container">
            <label htmlFor="lastName">Surname</label>
            {errors.lastName ? <span className="error">{errors.lastName}</span> : null}
          </div>
          <input
            type="text"
            id="lastName"
            onChange={handleChange}
            value={lastName}
            style={errors.lastName ? { borderColor: "red" } : null}
          />
        </div>
        <div>
          <div className="label-container">
            <label htmlFor="username">Username</label>
            {errors.username ? <span className="error">{errors.username}</span> : null}
          </div>
          <input
            type="text"
            id="username"
            onChange={handleChange}
            value={username}
            style={errors.username ? { borderColor: "red" } : null}
          />
        </div>
        <div>
          <div className="label-container">
            <label htmlFor="email">Email</label>
            {errors.email ? <span className="error">{errors.email}</span> : null}
          </div>
          <input
            type="email"
            id="email"
            onChange={handleChange}
            value={email}
            style={errors.email ? { borderColor: "red" } : null}
          />
        </div>
        <div>
          <div className="label-container">
            <label htmlFor="password">Password</label>
            {errors.password ? <span className="error">{errors.password}</span> : null}
          </div>
          <input
            type="password"
            id="password"
            onChange={handleChange}
            value={password}
            style={errors.password ? { borderColor: "red" } : null}
          />
        </div>
        <div>
          <div className="label-container">
            <label htmlFor="confirmPassword">ConfirmPassword</label>
            {errors.confirmPassword ? (
              <span className="error">{errors.confirmPassword}</span>
            ) : null}
          </div>
          <input
            type="password"
            id="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
            style={errors.confirmPassword ? { borderColor: "red" } : null}
          />
        </div>
        <button className="register-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
