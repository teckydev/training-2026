import { useState } from "react";
import type { BankTransferData } from "../types/transaction.types";
import { isAccountNumberValid, isIFSCValid } from "../utils/validators";

interface Props {
  data: BankTransferData;
  onChange: (data: BankTransferData) => void;
}

const BankTransferForm = ({ data, onChange }: Props) => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  const validate = (name: string, value: string) => {
    let error = "";

    if (name === "accountNumber" && !isAccountNumberValid(value))
      error = "Invalid account number";

    if (name === "ifsc" && !isIFSCValid(value))
      error = "Invalid IFSC code";

    if (name === "amount" && Number(value) <= 0)
      error = "Amount must be greater than 0";

    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    onChange({ ...data, [name]: value });
    validate(name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.values(errors).some(Boolean)) return;

    setSuccess(true);
  };

  // ✅ SUCCESS UI
  if (success) {
    return (
      <div className="success-box">
        <h3>✅ Transfer Successful</h3>
        <p>₹{data.amount} has been transferred successfully.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Bank Transfer</h3>

      <input
        name="accountNumber"
        placeholder="Account Number"
        value={data.accountNumber}
        onChange={handleChange}
      />
      <span>{errors.accountNumber}</span>

      <input
        name="ifsc"
        placeholder="IFSC Code"
        value={data.ifsc}
        onChange={handleChange}
      />
      <span>{errors.ifsc}</span>

      <input
        name="amount"
        placeholder="Amount"
        value={data.amount}
        onChange={handleChange}
      />
      <span>{errors.amount}</span>

      <input
        name="remark"
        placeholder="Remark"
        value={data.remark}
        onChange={handleChange}
      />

      <button type="submit">Transfer</button>
    </form>
  );
};

export default BankTransferForm;
