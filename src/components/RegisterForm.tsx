// src/components/RegisterForm.tsx
import type { RegisterData } from "../types/onboarding.types";

interface Props {
  data: RegisterData;
  onChange: (data: RegisterData) => void;
  onSuccess: () => void;
}

const RegisterForm = ({ data, onChange, onSuccess }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      alert("All fields required");
      return;
    }

    // API call happens here
    onSuccess();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input
        name="fullName"
        placeholder="Full Name"
        value={data.fullName}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={data.email}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={data.password}
        onChange={handleChange}
      />

      <button type="submit">Continue</button>
    </form>
  );
};

export default RegisterForm;
