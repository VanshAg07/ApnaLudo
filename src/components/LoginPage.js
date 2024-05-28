import React, { useState } from 'react';
import './LoginPage.css';

function LoginPage() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [name, setName] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [error, setError] = useState('');

  const handleMobileNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
    if (value.length <= 10) {
      setMobileNumber(value);
      setError('');
    } else {
      setError('Mobile number must be of maximum 10 digits.');
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleOtpChange = (e) => {
    setOtp(e.target.value);
  };

  const sendOtp = () => {
    if (mobileNumber && name) {
      // Simulate sending OTP (Replace with actual OTP sending logic)
      console.log('OTP Sent to:', mobileNumber);
      setIsOtpSent(true);
    } else {
      setError('Please fill in both mobile number and name.');
    }
  };

  const verifyOtp = () => {
    // Simulate OTP verification (Replace with actual OTP verification logic)
    if (otp === '123456') {
      console.log('OTP Verified!');
      // Proceed with login logic
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="input-container">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            placeholder="Enter your mobile number"
            maxLength="10"
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            required
          />
        </div>
        {isOtpSent && (
          <div className="input-container">
            <label htmlFor="otp">OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={handleOtpChange}
              placeholder="Enter OTP"
              maxLength="6"
              required
            />
          </div>
        )}
        {!isOtpSent ? (
          <button type="button" onClick={sendOtp}>
            Send OTP
          </button>
        ) : (
          <button type="button" onClick={verifyOtp}>
            Verify OTP
          </button>
        )}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default LoginPage;
