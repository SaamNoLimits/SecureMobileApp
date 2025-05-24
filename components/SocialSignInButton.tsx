import React from 'react';
import { TouchableOpacity, Text, Image, ActivityIndicator } from 'react-native';

interface SocialSignInButtonProps {
    onPress: () => void;
    icon: any;
    text: string;
    loading?: boolean;
}

export default function SocialSignInButton({
    onPress,
    icon,
    text,
    loading = false
}: SocialSignInButtonProps) {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={loading}
            className="flex-row items-center justify-center bg-white rounded-lg py-3 px-4 w-full mb-4"
        >
            {loading ? (
                <ActivityIndicator size="small" color="#333" />
            ) : (
                <>
                    <Image
                        source={icon}
                        className="w-5 h-5 mr-3"
                        resizeMode="contain"
                    />
                    <Text className="text-gray-800 font-semibold text-base">
                        {text}
                    </Text>
                </>
            )}
        </TouchableOpacity>
    );
} 