// src/components/AuthForm.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthProvider';

export default function AuthForm() {
  const { signIn, signUp, signInWithProvider, sendPasswordReset } = useAuth();
  const [mode, setMode] = useState('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      if (mode === 'signup') {
        const { error } = await signUp({ email, password });
        if (error) throw error;
        setMessage('Check your email for confirmation link (if email confirm required).');
      } else {
        const { error } = await signIn({ email, password });
        if (error) throw error;
        setMessage('Signed in successfully.');
      }
    } catch (err) {
      setMessage(err.message || 'Error');
    } finally {
      setLoading(false);
    }
  };

  const handleSocial = async (provider) => {
    setMessage('Redirecting to provider...');
    await signInWithProvider(provider);
  };

  const handleReset = async () => {
    if (!email) return setMessage('Enter email to reset password');
    setLoading(true);
    const { error } = await sendPasswordReset(email);
    setMessage(error ? error.message : 'Password reset email sent.');
    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto p-6 border rounded">
      <h2 className="text-xl font-bold mb-4">{mode === 'signup' ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Email
          <input className="block w-full mt-1 p-2 border" value={email} onChange={e => setEmail(e.target.value)} />
        </label>
        <label className="block mb-4">
          Password
          <input type="password" className="block w-full mt-1 p-2 border" value={password} onChange={e => setPassword(e.target.value)} />
        </label>
        <button type="submit" disabled={loading} className="px-4 py-2 mr-2 border rounded">
          {mode === 'signup' ? 'Create account' : 'Sign in'}
        </button>
        <button type="button" onClick={() => setMode(mode === 'signup' ? 'signin' : 'signup')} className="px-3 py-2 border rounded">
          {mode === 'signup' ? 'Have an account? Sign in' : 'No account? Sign up'}
        </button>
      </form>
      <div className="mt-4">
        <button onClick={() => handleSocial('google')} className="mr-2 px-3 py-2 border rounded">Continue with Google</button>
        <button onClick={() => handleSocial('github')} className="px-3 py-2 border rounded">Continue with GitHub</button>
      </div>
      <div className="mt-4">
        <button onClick={handleReset} className="text-sm">Forgot password?</button>
      </div>
      {message && <p className="mt-4 text-sm">{message}</p>}
    </div>
  );
}