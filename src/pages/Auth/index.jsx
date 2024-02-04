import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, ErrorMessage } from "formik";
import { Link, useNavigate } from "react-router-dom";
import {
  clearError,
  signInAsync,
  signUpAsync,
} from "../../store/slices/authSlice";
import logo from "../../assets/img/logo.png";
import "./Auth.css";

const Auth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  const [isLogin, setIsLogin] = useState(true);
  React.useEffect(() => {
    if (error === false) {
      navigate("/");
    }
  }, [error, navigate]);
  const handleFormSubmit = (values, { setSubmitting, setFieldValue }) => {
    try {
      dispatch(clearError());
      if (isLogin) {
        dispatch(signInAsync(values));
      } else {
        dispatch(signUpAsync(values));
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      setSubmitting(false);
      setFieldValue("email", "");
      setFieldValue("password", "");
    }
  };

  const toggleForm = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
    dispatch(clearError());
  };

  return (
    <div className="login">
      <Link to="/">
        <img src={logo} alt="logo" className="login__logo" />
      </Link>
      <div className="login-page">
        <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>
        {error && (
          <div className="login__error">
            Sorry, we can't find an account with this email address. Please try
            again or<span onClick={toggleForm}> create a new account</span>
          </div>
        )}
        <Formik
          initialValues={
            isLogin
              ? { email: "", password: "" }
              : { name: "", email: "", password: "" }
          }
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              // errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }

            if (!isLogin && !values.name) {
              errors.name = "Required";
            }

            return errors;
          }}
          onSubmit={handleFormSubmit}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit} className="login__form">
              {!isLogin && (
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  className="login__input"
                />
              )}
              <input
                type="email"
                required
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className="login__input"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="login__error"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="login__input"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="login__button"
              >
                {isLogin ? "Sign in" : "Sign up"}
              </button>
            </form>
          )}
        </Formik>
        <div className="login__message">
          {isLogin ? "New to Flimberry?" : "Already have an account?"}
          <span onClick={toggleForm}>
            {isLogin ? "Sign up now" : "Sign in"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Auth;
