import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'
import { Link, Stack } from 'expo-router'

export default function index() {
  return (
    <View style = {styles.container}>
      <Stack.Screen options={{title: "day 2"}}  />
      <Text style={{fontFamily: "Inter"}}>day detail screen</Text>
      <Link href={"/day2/onboarding"} asChild>
        <Button title='click here'/>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
 container:{
  padding: 10,

 }
});
