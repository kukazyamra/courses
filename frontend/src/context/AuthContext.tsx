import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api';

interface AuthContextType {
    isAuthenticated: boolean;
    userRole: number | null;
    isLoading: boolean;
    checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    isAuthenticated: false,
    userRole: null,
    isLoading: true,
    checkAuth: async () => {},
});

export const AuthProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    const checkAuth = async () => {
        try {
            setIsLoading(true);
            const response = await api.get('/auth/check', { withCredentials: true });

            console.log('Auth check response:', response.data);

            if (response.data.authenticated) {
                setIsAuthenticated(true);
                setUserRole(response.data.user.role);
            } else {
                setIsAuthenticated(false);
                setUserRole(null);
            }
        } catch (error) {
            console.error('Auth check failed:', error);
            setIsAuthenticated(false);
            setUserRole(null);
        } finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, userRole, isLoading, checkAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);