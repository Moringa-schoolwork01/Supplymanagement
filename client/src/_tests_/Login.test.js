import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
  test('renders email and password inputs', () => {
    const { getByLabelText } = render(<Login />);
    const emailInput = getByLabelText(/email/i);
    const passwordInput = getByLabelText(/password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('submits email and password on login button click', () => {
    const handleSubmit = jest.fn();
    const { getByLabelText, getByRole } = render(<Login onSubmit={handleSubmit} />);
    const emailInput = getByLabelText(/email/i);
    const passwordInput = getByLabelText(/password/i);
    const loginButton = getByRole('button', { name: /login/i });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(loginButton);
    expect(handleSubmit).toHaveBeenCalledWith({ email: 'test@example.com', password: 'password123' });
  });
});
