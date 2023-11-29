// LandingScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import MapView from '@teovilla/react-native-web-maps'; // Import MapView from the library
import { FontAwesome } from '@expo/vector-icons'; // Import FontAwesome icons
import { Octicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const LandingScreen = ({ navigation }) => {
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const navigateToOtherScreen = () => {
    navigation.navigate('OtherScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <WebView
          source={{
            uri:
              'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.508552126888!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858090a27407dd%3A0x2a3b28b4b8023242!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sca!4v1577794779630!5m2!1sen!2sca',
          }}
          style={styles.map}
        />
      </View>

      <View style={styles.controlSection}>
        <TouchableOpacity style={styles.iconButton} onPress={navigateToLogin}>
            <AntDesign name="find" size={24} color="#3498db" />
            <Text></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={navigateToOtherScreen}>
            <MaterialCommunityIcons  name="car-wrench" size={35} color="#3498db" />
            <Text></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={navigateToOtherScreen}>
            <Ionicons name="md-car-sport" size={35} color="#3498db" />
            <Text></Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton} onPress={navigateToOtherScreen}>
            <FontAwesome name="user" size={24} color="#3498db" />
            <Text></Text>
        </TouchableOpacity>

        {/* Add other controls or components here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
    width: '100%',
  },
  map: {
    flex: 1,
    width: '100%',
  },
  controlSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fff',
  },
  iconButton: {
    alignItems: 'center',
  },
});

export default LandingScreen;
