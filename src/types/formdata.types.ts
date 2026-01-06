export interface FormData  {
  personal: {
    name: string;
    email: string;
    age: string;
    gender: string;
  };
  preferences: {
    agree: boolean;
    skills: string[];
    feedback: string;
  };
};