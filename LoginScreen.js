// LoginScreen.js
import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogoPress = () => {
    navigation.navigate('Landing');
  };

  const handleLogin = async () => {
    // Validate email and password not working##
    // if (!email || !password) {
    //     Alert.alert('Validation Error', 'Please enter both email and password.');
    //     return;
    // }
    try {
      // Replace 'your-api-endpoint' with your actual API endpoint
      const apiEndpoint = 'https://your-api-endpoint.com/login';

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      if (response.ok) {
        // Authentication successful, you may want to store the token
        // or handle navigation to the next screen here
        console.log('Login successful!');
      } else {
        // Handle authentication failure
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleLogoPress}>
        <Image source={require('./assets/logoo.webp')} style={styles.logo} />
      </TouchableOpacity>
      <Text style={styles.title}>Welcome Back!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        autoCapitalize="none"
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot My Password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },  
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#162423',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#4c6168',
    borderWidth: 1,
    borderRadius: 0,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  loginButton: {
    backgroundColor: '#bc2900',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 0,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgotPassword: {
    marginTop: 16,
  },
  forgotPasswordText: {
    color: '#bc2900',
    fontSize: 14,
  },
});

export default LoginScreen;
