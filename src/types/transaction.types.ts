// src/types/transaction.types.ts

export interface PaymentData {
  amount: number;
  cardNumber: string;
  expiry: string;
  cvv: string;
}

export interface BankTransferData {
  accountNumber: string;
  ifsc: string;
  amount: number;
  remark: string;
}
