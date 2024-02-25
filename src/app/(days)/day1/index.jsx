import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function index() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Stack.Screen options={{title: "day 1"}}  />
      <Text>day 1</Text>
      <Text>Did some small expo demo</Text>
    </View>
  )
}