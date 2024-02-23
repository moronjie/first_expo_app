import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import CalenderList from './src/component/CalenderList';

export default function App() {

  const listData = [...Array(24)].map((_, i) => i + 1);

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
