// src/components/KYCForm.tsx
import type { KYCData } from "../types/onboarding.types";

interface Props {
  data: KYCData;
  onChange: (data: KYCData) => void;
  onSubmit: () => void;
}

const KYCForm = ({ data, onChange, onSubmit }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (data.aadhaar.length !== 12) {
      alert("Invalid Aadhaar");
      return;
    }

    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>KYC Verification</h2>

      <input
        name="aadhaar"
        placeholder="Aadhaar Number"
        value={data.aadhaar}
        onChange={handleChange}
      />

      <input
        name="pan"
        placeholder="PAN Number"
        value={data.pan}
        onChange={handleChange}
      />

      <button type="submit">Submit KYC</button>
    </form>
  );
};

export default KYCForm;
