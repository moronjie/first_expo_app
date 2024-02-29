import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const OnBoarding = () => {
  return (
    <View style = {styles.container}>
      <Stack.Screen options={{headerShown:false}} />  
      <Text>OnBoarding</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default OnBoarding