import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../../contexts/AuthContext';
import { router } from 'expo-router';

export default function Profile() {
    const { user, loading, signOut } = useAuth();

    if (loading) {
        return (
            <View className="flex-1 bg-[#0a071b] items-center justify-center">
                <ActivityIndicator size="large" color="#9b5cff" />
            </View>
        );
    }

    if (!user) {
        return (
            <View className="flex-1 bg-[#0a071b] items-center justify-center px-6">
                <Ionicons name="person-circle-outline" size={100} color="#9b5cff" />
                <Text className="text-white text-2xl font-semibold mt-4">Welcome to MovieApp</Text>
                <Text className="text-gray-400 mt-2 text-center">
                    Sign in to save your favorites and continue watching
                </Text>

                <View className="flex-row mt-6 space-x-4">
                    <TouchableOpacity 
                        className="bg-[#9b5cff] px-6 py-2 rounded-full"
                        onPress={() => router.push('/(auth)/signin')}
                    >
                        <Text className="text-white font-semibold">Sign In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                        className="border border-[#9b5cff] px-6 py-2 rounded-full"
                        onPress={() => router.push('/(auth)/signup')}
                    >
                        <Text className="text-[#9b5cff] font-semibold">Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return (
        <View className="flex-1 bg-[#0a071b] p-6">
            <View className="items-center">
                <Ionicons name="person-circle-outline" size={100} color="#9b5cff" />
                <Text className="text-white text-2xl font-semibold mt-4">{user.name}</Text>
                <Text className="text-gray-400 mt-1">{user.email}</Text>
            </View>

            <View className="flex-1 justify-center">
                {/* Add more profile options here */}
                <TouchableOpacity 
                    className="bg-red-500 p-4 rounded-lg mt-6"
                    onPress={signOut}
                >
                    <Text className="text-white text-center font-semibold">Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
