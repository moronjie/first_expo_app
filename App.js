import { FlatList, StyleSheet, Text, View } from 'react-native';
import CalenderList from './src/component/CalenderList';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Roboto_900Regular, Roboto_300Light } from '@expo-google-fonts/roboto';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const listData = [...Array(24)].map((_, i) => i + 1);

  const [fontsLoaded, fontError] = useFonts({
    Inter:Inter_900Black,
    Roboto:Roboto_900Regular,
    RobotoLight:Roboto_300Light
  });

  useEffect(() => {
    if(fontsLoaded && fontError) {
      SplashScreen.hideAsync();
    }
  },[fontsLoaded, fontError])  

  if(!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>

      <FlatList
        data={listData}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={2}
        renderItem={({ item }) => (
          <CalenderList item={item} />
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#fff',
    color: '#fff',
    textTransform: 'capitalize',
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  }
});
