import { Stack } from 'expo-router';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Roboto_900Black, Roboto_300Light } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

// SplashScreen.preventAutoHideAsync();

export default function Layout() {
    const [fontsLoaded, fontError] = useFonts({
        Inter: Inter_900Black,
        Roboto: Roboto_900Black,
        RobotoLight: Roboto_300Light,
    });

    useEffect(() => {
        if (fontsLoaded && fontError) {
          SplashScreen.hideAsync();
        }
    }, [fontsLoaded, fontError]);

    if (!fontsLoaded && !fontError) {
        return null;
    }
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
        <Stack.Screen name="index" options={{title: "react-native-calender-app"}}  />
    </Stack>
  );
}
