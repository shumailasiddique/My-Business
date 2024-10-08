import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { openDB } from 'idb';

interface AuthContextProps {
  isSignedIn: boolean;
  name: string | null;
  email: string | null;
  signIn: (name: string, email: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [name, setName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);

  const initDB = async () => {
    return await openDB('AuthDB', 1, {
      upgrade(db) {
        db.createObjectStore('user', { keyPath: 'id' });
      },
    });
  };

  const getUserFromDB = async () => {
    try {
      const db = await initDB();
      const tx = db.transaction('user', 'readonly');
      const store = tx.objectStore('user');
      const user = await store.get('auth-user');
      if (user) {
        setIsSignedIn(true);
        setName(user.name);
        setEmail(user.email);
      }
    } catch (error) {
      console.error('Error fetching user from IndexedDB', error);
    }
  };

  const saveUserToDB = async (user: { name: string; email: string }) => {
    try {
      const db = await initDB();
      const tx = db.transaction('user', 'readwrite');
      const store = tx.objectStore('user');
      await store.put({ id: 'auth-user', ...user });
    } catch (error) {
      console.error('Error saving user to IndexedDB', error);
    }
  };

  const removeUserFromDB = async () => {
    try {
      const db = await initDB();
      const tx = db.transaction('user', 'readwrite');
      const store = tx.objectStore('user');
      await store.delete('auth-user');
    } catch (error) {
      console.error('Error removing user from IndexedDB', error);
    }
  };

  const signIn = (name: string, email: string) => {
    setIsSignedIn(true);
    setName(name);
    setEmail(email);
    saveUserToDB({ name, email });
  };

  const signOut = () => {
    setIsSignedIn(false);
    setName(null);
    setEmail(null);
    removeUserFromDB();
  };

  useEffect(() => {
    getUserFromDB();
  }, []);

  return (
    <AuthContext.Provider value={{ isSignedIn, name, email, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export { AuthProvider, useAuth };
