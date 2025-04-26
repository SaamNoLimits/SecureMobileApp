// app/(tabs)/signin.tsx or signup.tsx
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignIn() {
    const router = useRouter();

    return (
        <View className="flex-1 items-center justify-center bg-white">
            <Text className="text-xl mb-4">Sign In Screen</Text>
            <TouchableOpacity
                className="border px-4 py-2 rounded"
                onPress={() => router.back()}
            >
                <Text>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
}
