import React, { useEffect } from 'react';
import useCaptcha from '../hooks/useCaptcha';
import CaptchaDisplay from './CaptchaDisplay';
import '../styles/captcha.css';

const CaptchaGenerator = () => {
  const {
    captchaText,
    userInput,
    setUserInput,
    isVerified,
    message,
    generateCaptcha,
    verifyCaptcha,
    refreshCaptcha,
  } = useCaptcha();

  useEffect(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyCaptcha();
  };

  return (
    <div className="captcha-container">
      <h1 className="captcha-title">Captcha Generator</h1>
      <p className="captcha-subtitle">Prove you're not a robot</p>
      
      <form onSubmit={handleSubmit}>
        <CaptchaDisplay 
          captchaText={captchaText} 
          onRefresh={refreshCaptcha}
        />
        
        <div className="input-group">
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder="Enter the text you see above"
            className="captcha-input"
            maxLength="6"
            disabled={isVerified}
          />
        </div>

        <button 
          type="submit" 
          className="verify-btn"
          disabled={!userInput || isVerified}
        >
          {isVerified ? 'Verified!' : 'Verify Captcha'}
        </button>
      </form>

      {message && (
        <div className={`message ${isVerified ? 'success' : 'error'}`}>
          {message}
        </div>
      )}

      <div className="stats">
        <div className="stat-item">
          <div className="stat-value">{captchaText.length}</div>
          <div>Characters</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">{isVerified ? 'Yes' : 'No'}</div>
          <div>Verified</div>
        </div>
        <div className="stat-item">
          <div className="stat-value">6</div>
          <div>Length</div>
        </div>
      </div>
    </div>
  );
};

export default CaptchaGenerator;