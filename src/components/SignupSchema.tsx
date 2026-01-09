import * as Yup from "yup";

export const SignupSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),

  password: Yup.string()
    .min(6, "Min 6 characters")
    .required("Required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),

  terms: Yup.boolean()
    .oneOf([true], "Accept terms"),
});
