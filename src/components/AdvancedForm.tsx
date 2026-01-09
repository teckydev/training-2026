import { Formik } from "formik";
import { AdvancedSchema } from "./schema/AdvanceSchema";
import "../css/form.css";

const AdvancedForm = () => {
  return (
    <div className="form-container">
      <h3>Advanced Form</h3>

      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: "",
          age: "",
          country: "",
          state: "",
          subscribe: false,
          terms: false,
        }}
        validationSchema={AdvancedSchema}
        onSubmit={values => {
          console.log("Submitted:", values);
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
          <form onSubmit={handleSubmit}>
            {/* NAME */}
            <label>
              Name
              <input
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.name && touched.name && (
              <p className="error">{errors.name}</p>
            )}

            {/* EMAIL */}
            <label>
              Email
              <input
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.email && touched.email && (
              <p className="error">{errors.email}</p>
            )}

            {/* PHONE */}
            <label>
              Phone
              <input
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.phone && touched.phone && (
              <p className="error">{errors.phone}</p>
            )}

            {/* PASSWORD */}
            <label>
              Password
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.password && touched.password && (
              <p className="error">{errors.password}</p>
            )}

            {/* CONFIRM PASSWORD */}
            <label>
              Confirm Password
              <input
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}

            {/* AGE */}
            <label>
              Age
              <input
                name="age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            {errors.age && touched.age && (
              <p className="error">{errors.age}</p>
            )}

            {/* COUNTRY */}
            <label>
              Country
              <select
                name="country"
                value={values.country}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                <option value="">Select country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
              </select>
            </label>
            {errors.country && touched.country && (
              <p className="error">{errors.country}</p>
            )}

            {/* STATE (CONDITIONAL) */}
            {values.country === "India" && (
              <>
                <label>
                  State
                  <input
                    name="state"
                    value={values.state}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </label>
                {errors.state && touched.state && (
                  <p className="error">{errors.state}</p>
                )}
              </>
            )}

            {/* CHECKBOXES */}
            <label className="checkbox-group">
              <input
                type="checkbox"
                name="subscribe"
                checked={values.subscribe}
                onChange={handleChange}
              />
              Subscribe newsletter
            </label>

            <label className="checkbox-group">
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

            {/* SUBMIT */}
            <button type="submit" disabled={!isValid}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AdvancedForm;
