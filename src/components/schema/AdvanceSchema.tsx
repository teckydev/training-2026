import * as Yup from "yup";

export const AdvancedSchema = Yup.object({

  // 1️⃣ Required + Min Length
  name: Yup.string()
    .min(3, "Min 3 characters")
    .required("Name is required"),

  // 2️⃣ Email Validation
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),

  // 3️⃣ Phone Number (Regex)
  phone: Yup.string()
    .matches(/^[6-9]\d{9}$/, "Invalid phone number")
    .required("Phone is required"),

  // 4️⃣ Password Strength
  password: Yup.string()
    .min(8, "Min 8 characters")
    .matches(/[A-Z]/, "One uppercase required")
    .matches(/[0-9]/, "One number required")
    .matches(/[@$!%*?&]/, "One special character required")
    .required("Password is required"),

  // 5️⃣ Confirm Password
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password"),

  // 6️⃣ Age Validation
  age: Yup.number()
    .min(18, "Must be 18+")
    .max(60, "Age must be below 60")
    .required("Age is required"),

  // 7️⃣ Conditional Validation
  country: Yup.string().required("Country is required"),

  state: Yup.string().when("country", {
    is: "India",
    then: schema => schema.required("State required for India"),
    otherwise: schema => schema.notRequired(),
  }),

  // 8️⃣ Checkbox Validation
  terms: Yup.boolean()
    .oneOf([true], "Accept terms to continue"),

  // 9️⃣ Conditional Checkbox
  subscribe: Yup.boolean(),

});
