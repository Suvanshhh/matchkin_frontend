import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [otp, setOTP] = useState('');
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStep(2);
      } else {
        const errData = await res.json();
        setError(errData.detail || 'Failed to send OTP');
      }
    } catch (err) {
      setError('Network error');
    }
    setLoading(false);
  };

  const handleVerifyOTP = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp }),
      });
      const data = await res.json();
      if (res.ok && data.token) {
        localStorage.setItem('token', data.token);
        setToken(data.token);
        navigate('/chat');
      } else {
        setError(data.detail || 'Invalid OTP');
      }
    } catch (err) {
      setError('Network error');
    }
    setLoading(false);
  };

  return (
    <div className="container">
      {step === 1 ? (
        <>
          <h2>Enter your Email</h2>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="your email"
            disabled={loading}
          />
          <button onClick={handleSendOTP} disabled={loading || !email}>
            {loading ? 'Sending...' : 'Send OTP'}
          </button>
        </>
      ) : (
        <>
          <h2>Enter OTP</h2>
          <input
            type="text"
            value={otp}
            onChange={e => setOTP(e.target.value)}
            placeholder="OTP"
            disabled={loading}
          />
          <button onClick={handleVerifyOTP} disabled={loading || !otp}>
            {loading ? 'Verifying...' : 'Verify OTP'}
          </button>
        </>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Login;
