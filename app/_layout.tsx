import { Stack } from "expo-router";
import "./globals.css";
import { StatusBar } from "react-native";
import { AuthProvider } from "../contexts/AuthContext";
import { FavoritesProvider } from '../contexts/FavoritesContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <StatusBar hidden={true} />

        <Stack>
          <Stack.Screen
            name="(tabs)"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="movie/[id]"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(auth)/signin"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(auth)/signup"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </FavoritesProvider>
    </AuthProvider>
  );
}
