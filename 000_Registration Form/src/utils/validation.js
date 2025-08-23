export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const validateName = (name) => {
  return name.length >= 2;
};

export const validatePhone = (phone) => {
  const phoneRegex = /^[0-9]{10,15}$/;
  return phoneRegex.test(phone);
};

export const validateForm = (formData) => {
  const errors = {};

  if (!validateName(formData.firstName)) {
    errors.firstName = 'First name must be at least 2 characters';
  }

  if (!validateName(formData.lastName)) {
    errors.lastName = 'Last name must be at least 2 characters';
  }

  if (!validateEmail(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }

  if (!validatePassword(formData.password)) {
    errors.password = 'Password must be at least 8 characters';
  }

  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = 'Passwords do not match';
  }

  if (formData.phone && !validatePhone(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }

  return errors;
};