import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Profile() {
    return (
        <View className="flex-1 bg-[#0a071b] items-center justify-center px-6">
            {/* Icon */}
            <Ionicons name="person-circle-outline" size={100} color="#9b5cff" />

            {/* Text */}
            <Text className="text-white text-2xl font-semibold mt-4">Welcome to MovieApp</Text>
            <Text className="text-gray-400 mt-2 text-center">
                Sign in to save your favorites and continue watching
            </Text>

            {/* Buttons */}
            <View className="flex-row mt-6 space-x-4">
                <TouchableOpacity className="bg-[#9b5cff] px-6 py-2 rounded-full">
                    <Text className="text-white font-semibold">Sign In</Text>
                </TouchableOpacity>

                <TouchableOpacity className="border border-[#9b5cff] px-6 py-2 rounded-full">
                    <Text className="text-[#9b5cff] font-semibold">Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
