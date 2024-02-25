import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function index() {
  return (
    <View>
      <Stack.Screen options={{title: "day 1"}}  />
      <Text style={{fontFamily: "Inter"}}>day 2</Text>
    </View>
  )
}