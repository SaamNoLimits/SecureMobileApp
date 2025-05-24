import React, { createContext, useContext, useState, useCallback } from 'react';
import { favoritesService } from '../lib/appwrite';

interface FavoritesContextType {
    favorites: any[];
    loading: boolean;
    refreshFavorites: () => Promise<void>;
    addToFavorites: (movie: any) => Promise<void>;
    removeFromFavorites: (movieId: string) => Promise<void>;
    isMovieFavorited: (movieId: string) => Promise<boolean>;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
    const [favorites, setFavorites] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const refreshFavorites = useCallback(async () => {
        try {
            setLoading(true);
            const data = await favoritesService.getUserFavorites();
            setFavorites(data);
        } catch (error) {
            console.error('Error loading favorites:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    const addToFavorites = useCallback(async (movie: any) => {
        try {
            await favoritesService.addToFavorites(movie);
            await refreshFavorites();
        } catch (error) {
            console.error('Error adding to favorites:', error);
            throw error;
        }
    }, [refreshFavorites]);

    const removeFromFavorites = useCallback(async (movieId: string) => {
        try {
            await favoritesService.removeFromFavorites(movieId);
            await refreshFavorites();
        } catch (error) {
            console.error('Error removing from favorites:', error);
            throw error;
        }
    }, [refreshFavorites]);

    const isMovieFavorited = useCallback(async (movieId: string) => {
        try {
            return await favoritesService.isMovieFavorited(movieId);
        } catch (error) {
            console.error('Error checking favorite status:', error);
            return false;
        }
    }, []);

    return (
        <FavoritesContext.Provider
            value={{
                favorites,
                loading,
                refreshFavorites,
                addToFavorites,
                removeFromFavorites,
                isMovieFavorited,
            }}
        >
            {children}
        </FavoritesContext.Provider>
    );
}

export function useFavorites() {
    const context = useContext(FavoritesContext);
    if (context === undefined) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
} 