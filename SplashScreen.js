// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        // Simulate a delay, then navigate to the landing screen
        const timer = setTimeout(() => {
        navigation.replace('Landing');
        }, 2000); // Adjust the delay as needed

        return () => clearTimeout(timer); // Clean up the timer
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                source={require('./assets/splash.png')}
                style={styles.logo}
            />
            <Text style={styles.text}>Roadoc</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1d1a1a',
    },
    logo:{
        width:200,
        height:200,
        resizeMode:'contain',
    },
    text:{
        marginTop:20,
        fontSize:18,
        fontWeight:'bold',
        color:'#EDF5F9'
    }
});

export default SplashScreen;