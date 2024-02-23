import { StyleSheet, Text, View } from "react-native"

export default function CalenderList({item}) {
  return (
    <View style={styles.box}>
        <Text style={styles.text}>{item}</Text>
    </View>
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
    }
  });
  