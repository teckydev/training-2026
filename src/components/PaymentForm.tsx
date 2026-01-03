// src/components/PaymentForm.tsx
import type { PaymentData } from "../types/transaction.types";
import { useState } from "react";

interface Props {
  data: PaymentData;
  onChange: (data: PaymentData) => void;
}

const PaymentForm = ({ data, onChange }: Props) => {
  const [errors, setErrors] = useState<Record<string, string>>({});

  // ✅ memory-code validator
  const validate = (name: string, value: string) => {
    let error = "";

    if (name === "amount" && Number(value) <= 0)
      error = "Invalid amount";

    if (name === "cardNumber" && value.length !== 16)
      error = "Card number must be 16 digits";

    if (name === "expiry" && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(value))
      error = "Invalid expiry";

    if (name === "cvv" && value.length !== 3)
      error = "Invalid CVV";

    setErrors(prev => ({ ...prev, [name]: error }));
  };

  // ✅ controlled input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    onChange({
      ...data,
      [name]: value, // always string
    });

    validate(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.values(errors).some(Boolean)) {
      alert("Fix errors before submitting");
      return;
    }

    const payload = {
      ...data,
      amount: Number(data.amount), // ✅ convert only here
    };

    console.log("Processing payment", payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Card Payment</h3>

      <input
        name="amount"
        placeholder="Amount"
        value={data.amount}
        onChange={handleChange}
      />
      <span>{errors.amount}</span>

      <input
        name="cardNumber"
        placeholder="Card Number"
        value={data.cardNumber}
        onChange={handleChange}
      />
      <span>{errors.cardNumber}</span>

      <input
        name="expiry"
        placeholder="MM/YY"
        value={data.expiry}
        onChange={handleChange}
      />
      <span>{errors.expiry}</span>

      <input
        name="cvv"
        type="password"
        placeholder="CVV"
        value={data.cvv}
        onChange={handleChange}
      />
      <span>{errors.cvv}</span>

      <button type="submit">Pay Now</button>
    </form>
  );
};

export default PaymentForm;
