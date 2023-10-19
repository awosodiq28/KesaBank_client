'use client';

import { createContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { API_URL } from '@/helpers/vars';

interface IUser {
  email: string;
  isAdmin: boolean;
  fullName: string;
  phoneNumber: string;
  created_at: Date;
  account_no: number;
  account_bal: number;
  verified: boolean;
  verifying: boolean;
  pending_KYC: boolean;
  verification_id: number | null;
  currency: string;
}

interface IContext {
  user: IUser | null;
  users: IUser[] | null;
  loading: boolean;
  error: any;
  authChecking: boolean;
  login?: ({ email, password }: any) => Promise<void>;
  signout?: () => Promise<void>;
  checkUserLoggedIn?: () => Promise<void>;
  getAllUsers?: () => Promise<void>;
}

const AuthContext = createContext<IContext>({
  user: null,
  loading: false,
  error: null,
  authChecking: true,
  users: null
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [error, setError] = useState(null) as any;
  const [loading, setLoading] = useState(false);
  const [authChecking, setAuthChecking] = useState(true);

  const router = useRouter();

  // useEffect(() => checkUserLoggedIn(), []);

  const login = async ({ email, password }: any) => {
    console.log(email);
    setLoading(true);
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = await res.json();
    console.log(data);
    setLoading(false);
    if (res.ok) {
      setUser(data);
      user?.isAdmin ? router.push('/dashboard') : router.push('/admin');
      router.refresh();
    } else {
      setError(data.message);
      error ?? console.log(error);
    }
  };

  const signout = async () => {
    const res = await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      credentials: 'include'
    });
    if (res.ok) {
      setUser(null);
      router.push('/');
      router.refresh();
    } else {
      alert('Unable to logout. Something went wrong.');
    }
  };

  useEffect(() => {
    checkUserLoggedIn();
    console.log({ auth: user });
  }, []);

  const checkUserLoggedIn = async () => {
    console.log('effect');
    const res = await fetch(`${API_URL}/auth/login`, {
      method: 'GET',
      credentials: 'include'
    });
    const data = await res.json();
    console.log('🚀 ~ file: AuthContext.tsx:56 ~ data:', data);
    if (res.ok) {
      console.log({ acc_no: data.account_no });
      setUser(data);
      setAuthChecking(false);
    } else {
      console.log('failed');
      setUser(null);
      setAuthChecking(false);
    }
  };
  const getAllUsers = async () => {
    console.log('effect');
    const res = await fetch(`${API_URL}/user`, {
      method: 'GET',
      credentials: 'include'
    });
    const data: IUser[] = await res.json();
    console.log('🚀 ~ file: AuthContext.tsx:56 ~ data:', data);
    if (res.ok) {
      setUsers([...data]);
      // router.refresh();
    } else {
      setUsers(null);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        user,
        users,
        loading,
        error,
        authChecking,
        login,
        signout,
        checkUserLoggedIn,
        getAllUsers
      }}>
      {children}{' '}
    </AuthContext.Provider>
  );
};

export default AuthContext;
