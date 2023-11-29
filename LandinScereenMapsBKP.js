// LandingScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const LandingScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.7749,
            longitude: -122.4194,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{ latitude: 37.7749, longitude: -122.4194 }}
            title="Marker Title"
            description="Marker Description"
          />
        </MapView>
      </View>

      <View style={styles.controlSection}>
        <Text>Landing Screen</Text>
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
        {/* Add other controls or components here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapContainer: {
    flex: 1,
    width: '100%',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  controlSection: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    width: '100%',
  },
});

export default LandingScreen;
