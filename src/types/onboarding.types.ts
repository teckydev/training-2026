// src/types/onboarding.types.ts
export interface RegisterData {
  fullName: string;
  email: string;
  password: string;
}

export interface KYCData {
  aadhaar: string;
  pan: string;
}
