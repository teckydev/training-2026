import { useState } from "react"
import type { KYCData, RegisterData } from "../types/onboarding.types";
import RegisterForm from "../components/RegisterForm";
import KYCForm from "../components/KYCForm";


export const Onboarding = () =>{
   const [step, setStep] = useState<"REGISTER" | "KYC">("REGISTER");
   const [registerData, setRegisterData] = useState<RegisterData>({
    fullName: "",
    email: "",
    password: "",
  });
  const [kycData, setKycData] = useState<KYCData>({
    aadhaar: "",
    pan: "",
  });
    return(
        <div>
{step === "REGISTER" && (
    <RegisterForm data={registerData} onChange={setRegisterData} onSuccess={()=>setStep("KYC")}/>
)}
{
    step === "KYC" && (
        <KYCForm data={kycData} onChange={setKycData}  onSubmit={() => alert("Onboarding Completed ✅")}/>
    )
}
        </div>
    )
}