import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { router } from 'expo-router';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const { signUp } = useAuth();

    const handleSignUp = async () => {
        if (!email || !password || !name) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setLoading(true);
        try {
            await signUp(email, password, name);
            router.replace('/(tabs)');
        } catch (error) {
            Alert.alert('Error', 'Failed to create account. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View className="flex-1 bg-[#0a071b] p-6">
            <View className="flex-1 justify-center">
                <Text className="text-white text-3xl font-bold mb-8">Create Account</Text>
                
                <TextInput
                    className="bg-[#1a1a1a] text-white p-4 rounded-lg mb-4"
                    placeholder="Name"
                    placeholderTextColor="#666"
                    value={name}
                    onChangeText={setName}
                />

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
                    onPress={handleSignUp}
                    disabled={loading}
                >
                    {loading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text className="text-white text-center font-semibold text-lg">
                            Sign Up
                        </Text>
                    )}
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => router.push('/sign-in')}
                    className="mt-4"
                >
                    <Text className="text-[#9b5cff] text-center">
                        Already have an account? Sign In
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
} 