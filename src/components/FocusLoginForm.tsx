import { useEffect, useRef, useState } from "react";

/* =====================
   Helper: Password Strength
===================== */
const getPasswordStrength = (password: string) => {
  if (password.length === 0) return 0;
  if (password.length < 6) return 1;
  if (password.match(/[A-Z]/) && password.match(/[0-9]/)) return 3;
  return 2;
};

const FocusLoginForm = () => {
  /* =====================
     STATE
  ===================== */
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  /* =====================
     REFS (FOCUS CONTROL)
  ===================== */
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmRef = useRef<HTMLInputElement>(null);

  /* =====================
     AUTO FOCUS FIRST FIELD
  ===================== */
  useEffect(() => {
    emailRef.current?.focus();
    passwordRef.current?.focus();
  }, []);

  /* =====================
     VALIDATION
  ===================== */
  const validate = (name: string, value: string) => {
    let error = "";

    if (name === "email" && !value.includes("@")) {
      error = "Invalid email";
    }

    if (name === "password" && value.length < 6) {
      error = "Password too short";
    }

    if (
      name === "confirmPassword" &&
      value !== form.password
    ) {
      error = "Passwords do not match";
    }

    setErrors(prev => ({ ...prev, [name]: error }));
  };

  /* =====================
     CHANGE HANDLER
  ===================== */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setForm(prev => ({ ...prev, [name]: value }));
    validate(name, value);
  };

  /* =====================
     FORM VALID
  ===================== */
  const isFormValid =
    form.email &&
    form.password &&
    form.confirmPassword &&
    Object.values(errors).every(err => !err);

  /* =====================
     JUMP TO FIRST ERROR
  ===================== */
  const jumpToError = () => {
    if (errors.email) emailRef.current?.focus();
    else if (errors.password) passwordRef.current?.focus();
    else if (errors.confirmPassword) confirmRef.current?.focus();
  };

  /* =====================
     PASSWORD STRENGTH
  ===================== */
  const strength = getPasswordStrength(form.password);

  const strengthText =
    strength === 1
      ? "Weak"
      : strength === 2
      ? "Medium"
      : strength === 3
      ? "Strong"
      : "";

  /* =====================
     SUBMIT
  ===================== */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h2>Login / Signup</h2>

      {/* EMAIL */}
      <input
        ref={emailRef}
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <small>{errors.email}</small>

      {/* PASSWORD */}
      <input
        ref={passwordRef}
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />

      {/* PASSWORD STRENGTH */}
      {form.password && (
        <div style={styles.meter}>
          <div
            style={{
              ...styles.bar,
              width: `${strength * 33}%`,
              background:
                strength === 1
                  ? "red"
                  : strength === 2
                  ? "orange"
                  : "green",
            }}
          />
          <small>{strengthText}</small>
        </div>
      )}

      <small>{errors.password}</small>

      {/* CONFIRM PASSWORD */}
      <input
        ref={confirmRef}
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={form.confirmPassword}
        onChange={handleChange}
      />
      <small>{errors.confirmPassword}</small>

      {/* ACTIONS */}
      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>

      <button type="button" onClick={jumpToError}>
        Jump to Error
      </button>
    </form>
  );
};

/* =====================
   SIMPLE STYLES
===================== */
const styles = {
  form: {
    width: "300px",
    margin: "40px auto",
    display: "flex",
    flexDirection: "column" as const,
    gap: "10px",
  },
  meter: {
    height: "6px",
    background: "#eee",
    borderRadius: "4px",
    position: "relative" as const,
  },
  bar: {
    height: "100%",
    borderRadius: "4px",
    transition: "width 0.3s",
  },
};

export default FocusLoginForm;
