import { Client, Account, Databases, ID } from 'appwrite';
import { APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, DATABASE_ID, COLLECTIONS } from './appwrite-config';
import * as WebBrowser from 'expo-web-browser';

const client = new Client();

try {
    client
        .setEndpoint(APPWRITE_ENDPOINT)
        .setProject(APPWRITE_PROJECT_ID);
} catch (error) {
    console.error('Failed to initialize Appwrite client:', error);
}

export const account = new Account(client);
export const databases = new Databases(client);

// Authentication functions
export const appwriteAuth = {
    // Create a new account
    createAccount: async (email: string, password: string, name: string) => {
        try {
            console.log('Creating account with:', { email, name }); // Debug log
            const validatePassword = (password: string) => {
                const minLength = 8;
                const hasUpperCase = /[A-Z]/.test(password);
                const hasLowerCase = /[a-z]/.test(password);
                const hasNumbers = /\d/.test(password);
                const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
                
                return password.length >= minLength && 
                       hasUpperCase && hasLowerCase && 
                       hasNumbers && hasSpecialChar;
            };

            if (!validatePassword(password)) {
                throw new Error('Password does not meet complexity requirements');
            }

            const response = await account.create(
                'unique()', // Unique ID
                email,
                password,
                name
            );
            console.log('Account created successfully:', response); // Debug log
            return response;
        } catch (error) {
            console.error('Account creation failed:', error); // Debug log
            throw error;
        }
    },

    // Sign in with email and password
    signIn: async (email: string, password: string) => {
        try {
            console.log('Signing in with email:', email); // Debug log
            const response = await account.createSession(email, password);
            console.log('Sign in successful:', response); // Debug log
            return response;
        } catch (error) {
            console.error('Sign in failed:', error); // Debug log
            throw error;
        }
    },

    // Sign in with Google
    signInWithGoogle: async () => {
        try {
            console.log('Initiating Google sign-in'); // Debug log

            // Open browser for Google OAuth
            const result = await WebBrowser.openAuthSessionAsync(
                `${APPWRITE_ENDPOINT}/account/sessions/oauth2/google?project=${APPWRITE_PROJECT_ID}&mode=redirect&redirectUrl=movieapp://`,
                'movieapp://'
            );

            if (result.type === 'success') {
                // Check if user is logged in
                const user = await account.get();
                console.log('Google sign-in successful:', user);
                return user;
            } else {
                throw new Error('Google sign-in failed or was cancelled');
            }
        } catch (error) {
            console.error('Google sign-in failed:', error); // Debug log
            throw error;
        }
    },

    // Sign out
    signOut: async () => {
        try {
            await account.deleteSession('current');
            console.log('Sign out successful'); // Debug log
        } catch (error) {
            console.error('Sign out failed:', error); // Debug log
            throw error;
        }
    },

    // Get current user
    getCurrentUser: async () => {
        try {
            const user = await account.get();
            console.log('Current user:', user); // Debug log
            return user;
        } catch (error) {
            console.error('Get current user failed:', error); // Debug log
            return null;
        }
    }
};

// Favorites functions
export const favoritesService = {
    // Add movie to favorites
    addToFavorites: async (movieData: any) => {
        try {
            const user = await account.get();
            const response = await databases.createDocument(
                DATABASE_ID,
                COLLECTIONS.FAVORITES,
                ID.unique(),
                {
                    userId: user.$id,
                    movieId: movieData.id,
                    title: movieData.title,
                    poster_path: movieData.poster_path,
                    overview: movieData.overview,
                    vote_average: movieData.vote_average,
                    release_date: movieData.release_date
                }
            );
            console.log('Added to favorites:', response);
            return response;
        } catch (error) {
            console.error('Failed to add to favorites:', error);
            throw error;
        }
    },

    // Remove movie from favorites
    removeFromFavorites: async (movieId: string) => {
        try {
            const user = await account.get();
            // First, find the favorite document by movie ID and user ID
            const favorites = await databases.listDocuments(
                DATABASE_ID,
                COLLECTIONS.FAVORITES,
                [
                    `filters[userId]=${user.$id}`,
                    `filters[movieId]=${movieId}`
                ]
            );

            if (favorites.documents.length > 0) {
                await databases.deleteDocument(
                    DATABASE_ID,
                    COLLECTIONS.FAVORITES,
                    favorites.documents[0].$id
                );
                console.log('Removed from favorites');
            }
        } catch (error) {
            console.error('Failed to remove from favorites:', error);
            throw error;
        }
    },

    // Check if movie is in favorites
    isMovieFavorited: async (movieId: string): Promise<boolean> => {
        try {
            const user = await account.get();
            const favorites = await databases.listDocuments(
                DATABASE_ID,
                COLLECTIONS.FAVORITES,
                [
                    `filters[userId]=${user.$id}`,
                    `filters[movieId]=${movieId}`
                ]
            );
            return favorites.documents.length > 0;
        } catch (error) {
            console.error('Failed to check favorite status:', error);
            return false;
        }
    },

    // Get user's favorites
    getUserFavorites: async () => {
        try {
            const user = await account.get();
            const favorites = await databases.listDocuments(
                DATABASE_ID,
                COLLECTIONS.FAVORITES,
                [`filters[userId]=${user.$id}`]
            );
            return favorites.documents;
        } catch (error) {
            console.error('Failed to get favorites:', error);
            throw error;
        }
    }
}; 