import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert, Image } from 'react-native';
import { useAuth } from '../../contexts/AuthContext';
import { router } from 'expo-router';
import { appwriteAuth } from '../../lib/appwrite';
import { Link } from 'expo-router';
import { icons } from '../../constants/icons';
import SocialSignInButton from '../../components/SocialSignInButton';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const { signUp, signIn } = useAuth();

    const handleSignUp = async () => {
        if (!email || !password || !name) {
            Alert.alert('Error', 'Please fill in all fields');
            return;
        }

        if (password.length < 8) {
            Alert.alert('Error', 'Password must be at least 8 characters long');
            return;
        }

        setLoading(true);
        try {
            const response = await signUp(email, password, name);
            console.log('Sign up response:', response);
            
            Alert.alert(
                'Success!',
                'Your account has been created successfully.',
                [
                    {
                        text: 'OK',
                        onPress: () => {
                            // Navigate to the main app
                            router.replace('/(tabs)');
                        }
                    }
                ],
                { cancelable: false }
            );
        } catch (error: any) {
            console.error('Sign up error:', error);
            
            let errorMessage = 'Failed to create account. Please try again.';
            
            if (error?.message) {
                if (error.message.includes('already exists')) {
                    errorMessage = 'An account with this email already exists.';
                } else if (error.message.includes('invalid email')) {
                    errorMessage = 'Please enter a valid email address.';
                } else {
                    errorMessage = error.message;
                }
            }
            
            Alert.alert('Error', errorMessage);
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
            console.error('Google sign-in error:', error);
            Alert.alert('Error', 'Failed to sign in with Google. Please try again.');
        } finally {
            setGoogleLoading(false);
        }
    };

    return (
        <View className="flex-1 bg-[#0a071b] p-6">
            <View className="flex-1 justify-center">
                <Text className="text-white text-3xl font-bold mb-8">Create Account</Text>
                
                <SocialSignInButton
                    icon={icons.google}
                    text="Continue with Google"
                    onPress={handleGoogleSignIn}
                    loading={googleLoading}
                />

                <View className="flex-row items-center my-4">
                    <View className="flex-1 h-[1px] bg-gray-700" />
                    <Text className="text-gray-400 mx-4">OR</Text>
                    <View className="flex-1 h-[1px] bg-gray-700" />
                </View>

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
                    placeholder="Password (minimum 8 characters)"
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

                <View className="flex-row justify-center mt-6">
                    <Text className="text-gray-400">Already have an account? </Text>
                    <Link href="/(auth)/signin" asChild>
                        <TouchableOpacity>
                            <Text className="text-[#9b5cff] font-semibold">
                                Sign In
                            </Text>
                        </TouchableOpacity>
                    </Link>
                </View>
            </View>
        </View>
    );
} 