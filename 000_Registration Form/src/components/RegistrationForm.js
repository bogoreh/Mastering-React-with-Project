import React, { useState } from 'react';
import FormInput from './FormInput';
import { validateForm } from '../utils/validation';
import '../styles/RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formErrors = validateForm(formData);
    
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Registration successful:', formData);
      setIsSubmitted(true);
      setErrors({});
    } catch (error) {
      console.error('Registration failed:', error);
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="success-container">
        <div className="success-icon">✓</div>
        <h2>Registration Successful!</h2>
        <p>Thank you for registering. A confirmation email has been sent.</p>
        <button onClick={handleReset} className="reset-button">
          Register Another Account
        </button>
      </div>
    );
  }

  return (
    <div className="registration-container">
      <div className="registration-form-wrapper">
        <h1>Create Account</h1>
        <p className="form-subtitle">Join us today and get started!</p>
        
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="form-row">
            <FormInput
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              error={errors.firstName}
              placeholder="Enter your first name"
              required
            />
            <FormInput
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              error={errors.lastName}
              placeholder="Enter your last name"
              required
            />
          </div>

          <FormInput
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            error={errors.email}
            placeholder="Enter your email"
            required
          />

          <FormInput
            label="Phone Number (Optional)"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            error={errors.phone}
            placeholder="Enter your phone number"
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            error={errors.password}
            placeholder="Create a password"
            required
          />

          <FormInput
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            error={errors.confirmPassword}
            placeholder="Confirm your password"
            required
          />

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="acceptTerms"
                checked={formData.acceptTerms}
                onChange={handleInputChange}
                className="checkbox-input"
              />
              <span className="checkmark"></span>
              I accept the Terms and Conditions
            </label>
            {errors.acceptTerms && (
              <span className="error-message">{errors.acceptTerms}</span>
            )}
          </div>

          {errors.submit && (
            <div className="error-message submit-error">{errors.submit}</div>
          )}

          <button
            type="submit"
            disabled={isSubmitting || !formData.acceptTerms}
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Registering...
              </>
            ) : (
              'Create Account'
            )}
          </button>
        </form>

        <p className="login-link">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;