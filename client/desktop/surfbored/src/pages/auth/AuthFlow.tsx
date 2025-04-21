import { useState } from "react";
import { sendOtp, verifyOtp } from '@/lib/auth';
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthStatus } from "@/hooks/supabaseHooks";

export default function AuthFlow() {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState<'enterPhone' | 'enterOtp'>('enterPhone');
  const { authenticated, loading } = useAuthStatus();
  const [error, setError] = useState<string | null>(null);

  // Step 1: Send OTP
  const _sendOtp = async () => {
    try {
      await sendOtp(phone);
      setStep('enterOtp');
    } catch(e) {
      setError("Failed to send OTP. Check the number.");
      console.error(e);
    }
  };

  // Step 2: Verify OTP
  const _verifyOtp = async () => {
    try {
      await verifyOtp(phone, otp);
      navigate("/dashboard");
      return null;
    } catch (e) {
      setError("Invalid OTP. Please try again.");
      console.error(e);
    }
  };

  if (loading) return <h1>Loading...</h1>;

  if (authenticated) return <Navigate to="/" replace />;


  return (
    <main className='flex justify-center w-full'>
      <div className='card'>
        {step === 'enterPhone' && (
          <div>
            <input
              placeholder="Phone number"
              type="tel"
              autoFocus
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              />
            <button onClick={_sendOtp}>Send OTP</button>
          </div>
        )}
        {step === 'enterOtp' && (
          <div>
            <input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              />
            <button onClick={_verifyOtp}>Verify OTP</button>
          </div>
        )}
        {error && <p className="text-destructive">{error}</p>}
      </div>
    </main>
  );
}
