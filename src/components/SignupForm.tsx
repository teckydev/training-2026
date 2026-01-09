import { Formik } from "formik";
import { SignupSchema } from "./SignupSchema";

const SignupForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
        terms: false,
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Form Data:", values);
        resetForm();
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isValid,
      }) => (
        <form onSubmit={handleSubmit} style={{ width: 300 }}>
          <h3>Signup</h3>

          {/* EMAIL */}
          <input
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email && (
            <p className="error">{errors.email}</p>
          )}

          {/* PASSWORD */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password && (
            <p className="error">{errors.password}</p>
          )}

          {/* CONFIRM PASSWORD */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.confirmPassword && touched.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}

          {/* CHECKBOX */}
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={values.terms}
              onChange={handleChange}
            />
            Accept terms
          </label>
          {errors.terms && touched.terms && (
            <p className="error">{errors.terms}</p>
          )}

          <button type="submit" disabled={!isValid}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
};

export default SignupForm;
