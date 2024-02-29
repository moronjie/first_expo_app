import { View, Text, Button } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function index() {
  return (
    <View>
      <Stack.Screen options={{title: "day 2"}}  />
      <Text style={{fontFamily: "Inter"}}>day detail screen</Text>
      <Link href={"/day2/onbording"} asChild>
        <Button title='click here'/>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
 
});
