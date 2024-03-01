import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack, router } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

const onboardData = [{
    icon: "money-bill-transfer",
    title: "welcome #onboard expo project",
    description: "This onboarding screen introduces the key features of the app",
},{
    icon: "",
    title: "growth and devlopment",
    description: "develop yourself by building projects and watching some useful tiutorials and courses",
},{
    icon: "",
    title: "achieve goals",
    description: "Use the app to track your progress towards achieving personal and professional goals",
}
]

const OnBoarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentData = onboardData[currentIndex];
    const handleNext = () => {
        if(currentIndex > onboardData.length - 1){
            handleSkip()
        }
        setCurrentIndex(currentIndex + 1)
    }
    const handleSkip = () => {
        router.back()
    }
  return (
    <SafeAreaView style={styles.container}>
        <Stack.Screen options={{headerShown:false}} />  
        <View >
            <FontAwesome6 name="money-bill-transfer" size={24} color="white" style={styles.onborad_icon} />
            <Text style={styles.onboard_title}>{currentData.title}</Text>
            <Text style={styles.onboard_discription}>{currentData.description}</Text>
            <View style={styles.button_container}>
                <Text onPress={handleSkip} style={styles.button_text}>Skip</Text>
                <Pressable onPress={handleNext} style={styles.button_}>
                    <Text style={styles.button_text}>Continue</Text>
                </Pressable>
            </View>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'center', 
        padding: 20,
        backgroundColor: '#15141a',
        gap: 20,

    },
    onborad_icon: {
        color: '#cef202',
        fontSize: 80,
        alignSelf: 'center',
        marginBottom: 40
    },
    onboard_title:{
        fontSize: 50,
        letterSpacing: 1.3,
        fontWeight: 'bold',
        color: '#fdfdfd',
        textTransform: 'capitalize',
        textAlign: 'center'
    },
    onboard_discription:{
        fontSize: 18,
        fontWeight: '400',
        color: 'gray',
        textAlign: 'center',
    },
    button_container:{
        flexDirection: 'row',
        alignContent: 'center',
        gap: 20,
        marginTop: 20,
    },
    button_text:{
        padding: 10,
        fontSize: 16,
        color: '#fdfdfd'
    },
    button_:{
        flex: 1,
        backgroundColor: '#302e38',
        borderRadius: 50,
        alignItems: 'center',
    }
})

export default OnBoarding