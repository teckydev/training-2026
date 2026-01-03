// src/pages/TransactionPage.tsx
import { useState } from "react";
import PaymentForm from "../components/PaymentForm";
import type { PaymentData, BankTransferData } from "../types/transaction.types";
import BankTransferForm from "../components/BankTransferForm";

const TransactionPage = () => {
  const [mode, setMode] = useState<"CARD" | "BANK">("CARD");

  const [paymentData, setPaymentData] = useState<PaymentData>({
    amount: 0,
    cardNumber: "",
    expiry: "",
    cvv: "",
  });

  const [bankData, setBankData] = useState<BankTransferData>({
    accountNumber: "",
    ifsc: "",
    amount: 0,
    remark: "",
  });

  return (
    <>
      <button onClick={() => setMode("CARD")}>Card Payment</button>
      <button onClick={() => setMode("BANK")}>Bank Transfer</button>

      {mode === "CARD" && (
        <PaymentForm
          data={paymentData}
          onChange={setPaymentData}
        />
      )}

      {mode === "BANK" && (
        <BankTransferForm
          data={bankData}
          onChange={setBankData}
        />
      )}
    </>
  );
};

export default TransactionPage;
