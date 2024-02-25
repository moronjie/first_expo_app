import { Platform, Pressable, StyleSheet, Text, View } from "react-native"
import { Link } from "expo-router";

export default function CalenderList({item}) {
  return (
    <Link href={`/day${item}`} asChild>
      <Pressable style={styles.box}>
          <Text style={styles.text}>{item}</Text>
      </Pressable>
    </Link>
  )
}

const styles = StyleSheet.create({
    box: {
      flex: 1,
      aspectRatio: 1,
      borderWidth: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#9b4521',
      backgroundColor: '#f9ede3',
      borderRadius: 20,
    },
    text: {
      color: '#9b4521',
      textTransform: 'capitalize',
      fontSize: 20,
      fontFamily: Platform.select({
        ios: 'Inter',
        android: 'RobotoLight',
      }),
    }
  });
  