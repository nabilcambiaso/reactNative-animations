import React, { useRef, useState } from 'react'
import { AntDesign } from "@expo/vector-icons";
import { StyleSheet, View, TouchableOpacity, Animated,Text } from "react-native";

const Circle = ({ onPress, animatedValue }) => {
    const range=[0, 0.001, 0.5, 0.501 , 1];

    const containerBgColor=animatedValue.interpolate({
        inputRange: range,
        outputRange: ['#FF7F50','#FF7F50','#FF7F50','gray','gray']
    })

    const circleBgColor=animatedValue.interpolate({
        inputRange: range,
        outputRange: ['gray','gray','gray','#FF7F50','#FF7F50']
    })

    return (
        <Animated.View style={[styles.circleContainer,{backgroundColor:containerBgColor}]}>
             <Text style={{ fontWeight:"bold",color:"white",position:"absolute",bottom:60 }}>Nabil Cambiaso animation</Text>
            <Animated.View style={[styles.circle,{backgroundColor:circleBgColor}, {
                transform: [
                    {
                        rotateY: animatedValue.interpolate({
                            inputRange: [0, 0.5, 1],
                            outputRange: ['0deg', '90deg', '180deg']
                        })
                    },
                    {
                        scale:animatedValue.interpolate({
                            inputRange: [0, 0.5, 1],
                            outputRange: [1,12,1]
                        })
                    },
                    {
                        translateY:animatedValue.interpolate({
                            inputRange: [0, 0.5, 1],
                            outputRange: [0,30,0]
                        })
                    },
                    {
                        perspective:50
                    }
                ]
            }]}>
                <TouchableOpacity onPress={onPress}>
                   
                        <AntDesign name='arrowright' size={28} color="white" />
                    
                </TouchableOpacity>
            </Animated.View>
        </Animated.View>
    )
}


function CircleAnimation() {

    const animatedValue = useRef(new Animated.Value(0)).current;
    const [index,setIndex] = useState(0);
    const animation = (toValue) =>Animated.timing(animatedValue, {
        toValue,
        duration: 3000,
        useNativeDriver: false
    })
    const onPress = () => {
        setIndex(index===1?0:1);
        animation(index===1?0:1).start();
    }

    return (
        <View style={styles.container}>
            <Circle onPress={onPress} animatedValue={animatedValue} ></Circle>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        width:"100%"
    },
    circleContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 8,
        paddingBottom: 300,
        backgroundColor: "#FF7F50"

    },
    circle: {
        backgroundColor: 'gray',
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
})

export default CircleAnimation