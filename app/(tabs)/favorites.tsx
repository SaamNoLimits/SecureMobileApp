import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, RefreshControl } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { useFavorites } from '../../contexts/FavoritesContext';
import { router } from 'expo-router';
import FavoriteButton from '../../components/FavoriteButton';

export default function Favorites() {
    const { user } = useAuth();
    const { favorites, loading, refreshFavorites } = useFavorites();

    useEffect(() => {
        if (user) {
            refreshFavorites();
        }
    }, [user]);

    if (!user) {
        return (
            <View className="flex-1 bg-[#0a071b] items-center justify-center p-4">
                <Text className="text-white text-xl text-center mb-4">
                    Sign in to see your favorite movies
                </Text>
                <TouchableOpacity
                    className="bg-[#9b5cff] px-6 py-3 rounded-full"
                    onPress={() => router.push('/(auth)/signin')}
                >
                    <Text className="text-white font-semibold">Sign In</Text>
                </TouchableOpacity>
            </View>
        );
    }

    if (loading) {
        return (
            <View className="flex-1 bg-[#0a071b] items-center justify-center">
                <ActivityIndicator size="large" color="#9b5cff" />
            </View>
        );
    }

    return (
        <View className="flex-1 bg-[#0a071b]">
            <Text className="text-white text-2xl font-bold p-4">My Favorites</Text>
            <FlatList
                data={favorites}
                keyExtractor={(item) => item.$id}
                refreshControl={
                    <RefreshControl
                        refreshing={loading}
                        onRefresh={refreshFavorites}
                        tintColor="#9b5cff"
                    />
                }
                renderItem={({ item }) => (
                    <TouchableOpacity
                        className="flex-row bg-[#1a1a1a] m-2 rounded-lg overflow-hidden"
                        onPress={() => router.push(`/movie/${item.movieId}`)}
                    >
                        <Image
                            source={{
                                uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`
                            }}
                            className="w-24 h-36"
                        />
                        <View className="flex-1 p-3">
                            <Text className="text-white text-lg font-semibold mb-2">
                                {item.title}
                            </Text>
                            <Text className="text-gray-400 text-sm mb-2">
                                {item.release_date?.split('-')[0]}
                            </Text>
                            <Text className="text-gray-400 text-sm" numberOfLines={3}>
                                {item.overview}
                            </Text>
                        </View>
                        <View className="absolute top-2 right-2">
                            <FavoriteButton
                                movie={{
                                    id: item.movieId,
                                    title: item.title,
                                    poster_path: item.poster_path,
                                    overview: item.overview,
                                    vote_average: item.vote_average,
                                    release_date: item.release_date
                                }}
                            />
                        </View>
                    </TouchableOpacity>
                )}
                ListEmptyComponent={() => (
                    <View className="flex-1 items-center justify-center p-4">
                        <Text className="text-white text-lg text-center">
                            No favorite movies yet
                        </Text>
                    </View>
                )}
            />
        </View>
    );
} 