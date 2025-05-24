import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { router } from 'expo-router';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { signIn } = useAuth();

    const handleSignIn = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setLoading(true);
        try {
            await signIn(email, password);
            router.replace('/(tabs)');
        } catch (error) {
            Alert.alert('Error', 'Failed to sign in. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View className="flex-1 bg-[#0a071b] p-6">
            <View className="flex-1 justify-center">
                <Text className="text-white text-3xl font-bold mb-8">Welcome Back</Text>
                
                <TextInput
                    className="bg-[#1a1a1a] text-white p-4 rounded-lg mb-4"
                    placeholder="Email"
                    placeholderTextColor="#666"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                
                <TextInput
                    className="bg-[#1a1a1a] text-white p-4 rounded-lg mb-6"
                    placeholder="Password"
                    placeholderTextColor="#666"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity
                    className="bg-[#9b5cff] p-4 rounded-lg mb-4"
                    onPress={handleSignIn}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text className="text-white text-center font-semibold text-lg">
                            Sign In
                        </Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => router.push('/sign-up')}
                    className="mt-4"
                >
                    <Text className="text-[#9b5cff] text-center">
                        Don't have an account? Sign Up
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
} 