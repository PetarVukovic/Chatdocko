// src/contexts/AuthContext.tsx
import React, { createContext, ReactNode, useContext } from 'react';
import { observer } from 'mobx-react';
import authStore from '../stores/AuthStore';

interface AuthContextProps {
    children: ReactNode;
}

const AuthContext = createContext(authStore);

export const useAuthStore = () => useContext(AuthContext);

export const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
    return <AuthContext.Provider value={authStore}>{children}</AuthContext.Provider>;
};
