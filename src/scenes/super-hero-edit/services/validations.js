export const required = value => (value ? undefined : "Required");

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined;

export const number = value =>
  value && isNaN(Number(value)) ? "Must be a number" : undefined;

export const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined;

export const maxValue = max => value =>
  value && value > max ? `Must be less than ${max+1}` : undefined;

export const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ? "Invalid email address"
  : undefined;

export const tooOld = value =>
  value && value > 40 ? "This guy might be too old for being a super man" : undefined;