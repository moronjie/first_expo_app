import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Stack, router } from 'expo-router'
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureDetector, Gesture, Directions } from 'react-native-gesture-handler';
import Animated,{ SlideInRight, SlideOutLeft } from 'react-native-reanimated';

const onboardData = [{
    icon: "snowman",
    title: "welcome #onboard expo project",
    description: "This onboarding screen introduces the key features of the app",
},{
    icon: "user-graduate",
    title: "growth and devlopment",
    description: "develop yourself by building projects and watching some useful tiutorials and courses",
},{
    icon: "fire",
    title: "achieve goals",
    description: "Use the app to track your progress towards achieving personal and professional goals",
}
]

const OnBoarding = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const currentData = onboardData[currentIndex];
    const handleNext = () => {
        if(currentIndex === onboardData.length - 1){
            router.back()
        }
        setCurrentIndex(currentIndex + 1)
    }
    const handleBack = () => {
        if(currentIndex == 0){
            router.back()
        }
        setCurrentIndex(currentIndex - 1)
    }
    const handleSkip = () => {
        router.back()
    }

    const swipeLeft = Gesture.Fling().direction(Directions.LEFT).onStart((e) => { handleNext()})
    const swipeRight = Gesture.Fling().direction(Directions.RIGHT).onStart((e) => {handleBack()})

    const composed = Gesture.Simultaneous(swipeLeft, swipeRight);

  return (
    <SafeAreaView style={styles.mainContainer}>
        
        <Stack.Screen options={{headerShown:false}} />  
        <View style={styles.container}>
            <View style={styles.swipecontainer}>
                {onboardData.map((d, i)=>{
                    return(
                        <View key={i} style={[styles.swipeBar, {backgroundColor: currentIndex === i? '#cef202': 'gray'}]}/>
                    )
                })}
            </View>
            <GestureDetector gesture={composed}>
                <View >
                    <FontAwesome5 name={currentData.icon} size={24} color="white" style={styles.onborad_icon} />
                    <Animated.Text entering={SlideInRight} style={styles.onboard_title}>{currentData.title}</Animated.Text>
                    <Animated.Text entering={SlideInRight.delay(200)} style={styles.onboard_discription}>{currentData.description}</Animated.Text>
                    <View style={styles.button_container}>
                        <Text onPress={handleSkip} style={styles.button_text}>Skip</Text>
                        <Pressable onPress={handleNext} style={styles.button_}>
                            <Text style={styles.button_text}>Continue</Text> 
                        </Pressable>
                    </View>
                </View>
            </GestureDetector>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center', 
        backgroundColor: '#15141a',
        gap: 20,
    },
    container:{
        flex: 1,
        padding: 20,
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
    },
    swipecontainer:{
        // position: 'absolute',
        // top: '50',
        marginBottom: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
    },
    swipeBar: {
        flex: 1,
        height: 3,
    }
})

export default OnBoarding