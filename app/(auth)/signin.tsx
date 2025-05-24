import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { appwriteAuth } from '../../lib/appwrite';
import { useAuth } from '../../contexts/AuthContext';
import { icons } from '../../constants/icons';
import SocialSignInButton from '../../components/SocialSignInButton';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const router = useRouter();
    const { signIn } = useAuth();

    const handleSignIn = async () => {
        if (!email || !password) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        setLoading(true);
        try {
            const response = await appwriteAuth.signIn(email, password);
            await signIn(response);
            router.replace('/(tabs)');
        } catch (error: any) {
            Alert.alert('Error', error.message || 'Failed to sign in');
        } finally {
            setLoading(false);
        }
    };

    const handleGoogleSignIn = async () => {
        setGoogleLoading(true);
        try {
            const user = await appwriteAuth.signInWithGoogle();
            if (user) {
                await signIn(user);
                router.replace('/(tabs)');
            }
        } catch (error: any) {
            Alert.alert('Error', error.message || 'Failed to sign in with Google');
        } finally {
            setGoogleLoading(false);
        }
    };

    return (
        <View className="flex-1 bg-[#0a071b] p-4">
            <View className="flex-1 justify-center">
                <Text className="text-white text-3xl font-bold mb-8">Sign In</Text>

                <SocialSignInButton
                    icon={icons.google}
                    text="Continue with Google"
                    onPress={handleGoogleSignIn}
                    loading={googleLoading}
                />

                <View className="flex-row items-center my-4">
                    <View className="flex-1 h-[1px] bg-gray-700" />
                    <Text className="text-gray-400 mx-4">or</Text>
                    <View className="flex-1 h-[1px] bg-gray-700" />
                </View>

                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg mb-4"
                    placeholderTextColor="#666"
                />

                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    className="bg-[#1a1a1a] text-white px-4 py-3 rounded-lg mb-6"
                    placeholderTextColor="#666"
                />

                <TouchableOpacity
                    onPress={handleSignIn}
                    disabled={loading}
                    className="bg-[#9b5cff] rounded-lg py-4 items-center"
                >
                    {loading ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text className="text-white font-semibold text-lg">
                            Sign In
                        </Text>
                    )}
                </TouchableOpacity>

                <View className="flex-row justify-center mt-6">
                    <Text className="text-gray-400">Don't have an account? </Text>
                    <Link href="/(auth)/signup" asChild>
                        <TouchableOpacity>
                            <Text className="text-[#9b5cff] font-semibold">
                                Sign Up
                            </Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    );
} 