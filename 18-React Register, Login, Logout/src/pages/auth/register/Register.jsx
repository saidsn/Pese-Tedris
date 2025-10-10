import { useFormik } from "formik";
import "./Register.css";
import axios from "axios";
import { registerSchema } from "../../../schemas/register/RegisterSchema";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const baseUrl = "http://localhost:3000/users";

  let navigate = useNavigate();
  const [users, setUsers] = useState([]);

  let getUsers = async () => {
    let { data } = await axios(baseUrl);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const { values, handleChange, handleSubmit, resetForm, errors } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      isLogined: false,
    },
    onSubmit: async (values) => {
      let { username, email } = values;

      let existUser = users.find(
        (user) => user.username == username || user.email == email
      );

      if (existUser) {
        toast.error("User already exist");
      } else {
        await axios.post("http://localhost:3000/users", values);
        toast.success("User register Succsess ");
        resetForm();
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
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
            {errors.firstName ? (
              <span className="error">{errors.firstName}</span>
            ) : null}
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
            {errors.lastName ? (
              <span className="error">{errors.lastName}</span>
            ) : null}
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
            {errors.username ? (
              <span className="error">{errors.username}</span>
            ) : null}
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
            {errors.email ? (
              <span className="error">{errors.email}</span>
            ) : null}
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
            {errors.password ? (
              <span className="error">{errors.password}</span>
            ) : null}
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
        <p style={{ padding: "5px 0 0" }}>
          Already have an account?
          <Link style={{ color: "aqua" }} to={"/login"}>
            Sign In
          </Link>
        </p>
        <button className="register-btn" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Register;
