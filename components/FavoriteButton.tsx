import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../contexts/AuthContext';
import { useFavorites } from '../contexts/FavoritesContext';
import { router } from 'expo-router';

interface FavoriteButtonProps {
    movie: {
        id: string;
        title: string;
        poster_path: string;
        overview: string;
        vote_average: number;
        release_date: string;
    };
    size?: number;
}

export default function FavoriteButton({ movie, size = 24 }: FavoriteButtonProps) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useAuth();
    const { addToFavorites, removeFromFavorites, isMovieFavorited } = useFavorites();

    useEffect(() => {
        checkFavoriteStatus();
    }, [movie.id]);

    const checkFavoriteStatus = async () => {
        if (!user) return;
        try {
            const status = await isMovieFavorited(movie.id);
            setIsFavorite(status);
        } catch (error) {
            console.error('Error checking favorite status:', error);
        }
    };

    const toggleFavorite = async () => {
        if (!user) {
            Alert.alert(
                'Sign In Required',
                'Please sign in to add movies to your favorites.',
                [
                    { text: 'Cancel', style: 'cancel' },
                    { text: 'Sign In', onPress: () => router.push('/(auth)/signin') }
                ]
            );
            return;
        }

        setIsLoading(true);
        try {
            if (isFavorite) {
                await removeFromFavorites(movie.id);
                setIsFavorite(false);
            } else {
                await addToFavorites(movie);
                setIsFavorite(true);
            }
        } catch (error) {
            console.error('Error toggling favorite:', error);
            Alert.alert('Error', 'Failed to update favorites. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <TouchableOpacity
            onPress={toggleFavorite}
            disabled={isLoading}
            className="p-2"
        >
            <Ionicons
                name={isFavorite ? 'heart' : 'heart-outline'}
                size={size}
                color={isFavorite ? '#ff4081' : '#fff'}
            />
        </TouchableOpacity>
    );
} 