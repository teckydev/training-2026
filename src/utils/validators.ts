// src/utils/validators.ts
export const isAccountNumberValid = (val: string) => /^\d{9,18}$/.test(val);

export const isIFSCValid = (val: string) =>
  /^[A-Z]{4}0[A-Z0-9]{6}$/.test(val);

export const isCardValid = (val: string) =>
  /^\d{16}$/.test(val);

export const isExpiryValid = (val: string) =>
  /^(0[1-9]|1[0-2])\/\d{2}$/.test(val);

export const isCVVValid = (val: string) =>
  /^\d{3}$/.test(val);
