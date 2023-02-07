import * as React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo} 
        source={require('../assets/little-lemon-logo.png')}
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'} 
      />
      <Text style={styles.text}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Pressable onPress={() => onLogin(!loggedIn)} style={styles.button}>
        <Text style={styles.buttonText}> Newsletter</Text>
      </Pressable>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
     height: 200,
     width: 400,
     resizeMode: 'contain',
     marginTop: 112,
  },
  text: {
    textAlign: 'center',
    fontWeight: 'bold',
    width: 200,
    marginTop: 64,
    fontSize: 16,
  },
  button: {
    fontSize: 24,
    padding: 8,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#023020',
    borderColor: '#023020',
    borderWidth: 2,
    marginTop: 216,
    borderRadius: 4,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
  },
});

export default WelcomeScreen;