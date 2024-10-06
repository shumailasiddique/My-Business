import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const useSignIn = () => {
  const { t } = useTranslation();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('admin');
  const [password, setPassword] = useState('password');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSignIn = async () => {
    if (email === '' || password === '') {
      setError(t('error_empty_fields'));
      return;
    }

    setLoading(true);
    setError(null);

    try {
      if (email !== 'admin' || password !== 'password') {
        throw new Error('Invalid credentials');
      }

      const name = 'Bob';
      setName(name);
      signIn(name, email);
      navigate('/processing');
    } catch (err) {
      setError(t('error_invalid_credentials'));
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setEmail('');
    setPassword('');
    setError(null);
    setName(null);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    handleSignIn,
    loading,
    clearForm,
    name,
  };
};

export default useSignIn;
