import "./Login.css";
import React, { useState, useEffect } from "react";

function useFormik({ initialValues, validate }) {
  const [touched, setTouchedFields] = useState({});
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(initialValues);

  useEffect(() => {
    console.log("Alguém mexeu nos values", values);
    validateValues(values);
  }, [values]);

  function handleChange(event) {
    const fieldName = event.target.getAttribute("name");
    const { value } = event.target;
    setValues({
      ...values,
      [fieldName]: value,
    });
  }

  function handleBlur(event) {
    const fieldName = event.target.getAttribute("name");
    console.log(fieldName);
    setTouchedFields({
      ...touched,
      [fieldName]: true,
    });
  }

  function validateValues(values) {
    setErrors(validate(values));
  }

  return {
    values,
    errors,
    touched,
    handleBlur,
    setErrors,
    handleChange,
  };
}

function Login() {
  const formik = useFormik({
    initialValues: {
      userEmail: "",
      userPassword: "",
    },
    validate: function (values) {
      const errors = {};

      if (!values.userEmail.includes("@")) {
        errors.userEmail = "Please, insert a valid email";
      }

      if (values.userPassword.length < 8) {
        errors.userPassword = "Please, insert a valid password";
      }

      return errors;
    },
  });

  return (
    <div className="center">
      <main className="loginContainer">
        <h2>Login</h2>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            console.log(formik.values);
            // validateValues(formik.values)
            alert("Olha o console!");
          }}
        >
          <div className="input-field">
            <input
              type="text"
              placeholder="email@example.com"
              name="userEmail"
              id="userEmail"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.userEmail}
            />
          </div>
          {formik.touched.userEmail && formik.errors.userEmail && (
            <span className="formField__error">{formik.errors.userEmail}</span>
          )}
          <div className="input-field">
            <input
              type="password"
              placeholder="Your secret password"
              name="userPassword"
              id="userPassword"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.userPassword}
            />
          </div>
          {formik.touched.userPassword && formik.errors.userPassword && (
            <span className="formField__error">
              {formik.errors.userPassword}
            </span>
          )}
          <div className="checkbox-keep-conected">
            <input type="checkbox" />
            &nbsp;Keep Conected?
          </div>

          <input type="submit" value="Continue" />

          <div className="passwordRecovery">
            <a
              className="passwordRecoverylink"
              href="/passwordRecovery"
              id="to-passwordRecovery"
              aria-label="password-recovery"
            >
              Forgot your password?
            </a>
          </div>

          <div className="createAccountText">
            Not a member? It's free and easy to use.
          </div>
          <a
            className="signUplink"
            href="/createAccount"
            id="to-register"
            aria-label="create-an-account"
          >
            Sign-Up
          </a>
        </form>
      </main>
    </div>
  );
}

export default Login;
