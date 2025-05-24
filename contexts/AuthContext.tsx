import React, { createContext, useState, useContext, useEffect } from 'react';
import { appwriteAuth } from '../lib/appwrite';
import { Models } from 'appwrite';
import { Alert } from 'react-native';

interface AuthContextType {
    user: Models.User<Models.Preferences> | null;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<void>;
    signUp: (email: string, password: string, name: string) => Promise<Models.User<Models.Preferences>>;
    signOut: () => Promise<void>;
    signInWithGoogle: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        checkUser();
    }, []);

    async function checkUser() {
        try {
            const currentUser = await appwriteAuth.getCurrentUser();
            console.log('Current user state:', currentUser);
            setUser(currentUser);
        } catch (error) {
            console.error('Error checking user:', error);
            setUser(null);
        } finally {
            setLoading(false);
        }
    }

    const signIn = async (email: string, password: string) => {
        try {
            await appwriteAuth.signIn(email, password);
            const currentUser = await appwriteAuth.getCurrentUser();
            setUser(currentUser);
            console.log('Sign in successful:', currentUser);
        } catch (error) {
            console.error('Sign in error:', error);
            throw error;
        }
    };

    const signInWithGoogle = async () => {
        try {
            await appwriteAuth.signInWithGoogle();
            const currentUser = await appwriteAuth.getCurrentUser();
            setUser(currentUser);
            console.log('Google sign in successful:', currentUser);
        } catch (error) {
            console.error('Google sign in error:', error);
            throw error;
        }
    };

    const signUp = async (email: string, password: string, name: string) => {
        try {
            const newUser = await appwriteAuth.createAccount(email, password, name);
            console.log('Account created:', newUser);
            
            // Automatically sign in after successful registration
            await signIn(email, password);
            
            return newUser;
        } catch (error) {
            console.error('Sign up error:', error);
            throw error;
        }
    };

    const signOut = async () => {
        try {
            await appwriteAuth.signOut();
            setUser(null);
            console.log('Sign out successful');
        } catch (error) {
            console.error('Sign out error:', error);
            throw error;
        }
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            loading, 
            signIn, 
            signUp, 
            signOut,
            signInWithGoogle 
        }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
} 