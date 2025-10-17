import { useState, useCallback } from 'react';

const useCaptcha = () => {
  const [captchaText, setCaptchaText] = useState('');
  const [userInput, setUserInput] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [message, setMessage] = useState('');

  const generateCaptcha = useCallback(() => {
    const characters = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setCaptchaText(result);
    setUserInput('');
    setIsVerified(false);
    setMessage('');
  }, []);

  const verifyCaptcha = useCallback(() => {
    if (userInput === captchaText) {
      setIsVerified(true);
      setMessage('✅ Captcha verified successfully!');
    } else {
      setIsVerified(false);
      setMessage('❌ Incorrect captcha. Please try again.');
      generateCaptcha();
    }
  }, [userInput, captchaText, generateCaptcha]);

  const refreshCaptcha = useCallback(() => {
    generateCaptcha();
  }, [generateCaptcha]);

  return {
    captchaText,
    userInput,
    setUserInput,
    isVerified,
    message,
    generateCaptcha,
    verifyCaptcha,
    refreshCaptcha,
  };
};

export default useCaptcha;