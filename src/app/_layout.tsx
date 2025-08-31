import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { useFonts } from 'expo-font';
import {
	BeVietnamPro_300Light,
	BeVietnamPro_400Regular,
	BeVietnamPro_500Medium,
	BeVietnamPro_600SemiBold,
	BeVietnamPro_700Bold,
} from '@expo-google-fonts/be-vietnam-pro';
import {
	Sora_600SemiBold,
	Sora_700Bold,
} from '@expo-google-fonts/sora';
import { ThemeProvider } from "@/core/hooks/useTheme";
import { ConvexProvider, ConvexReactClient } from "convex/react";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
    const [appReady, setAppReady] = useState(false);

    const [loaded, error] = useFonts({
        primaryLight: BeVietnamPro_300Light,
        primaryRegular: BeVietnamPro_400Regular,
        primaryMedium: BeVietnamPro_500Medium,
        primarySemiBold: BeVietnamPro_600SemiBold,
        primaryBold: BeVietnamPro_700Bold,
        altSemiBold: Sora_600SemiBold,
        altBold: Sora_700Bold,
    })

    useEffect(() => {
        if(loaded || error) {
            setAppReady(true);
        }
    }, [loaded, error]);

    if(!appReady) {
        return <Text>null</Text>;
    };

    return (
        <ConvexProvider client={convex}>
            <ThemeProvider>
                <Stack screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='(tabs)' />
                </Stack>
            </ThemeProvider>
        </ConvexProvider>
    )
}
