import React, { useEffect } from 'react';
import { View, Text, Image, Pressable, StyleSheet, TextInput, Alert } from 'react-native';
import { validateEmail } from '../utils/index';

const SubscribeScreen = ({ navigation }) => {
  const [text, onChangeText] = React.useState('');

  useEffect(() => {
    onVisibleButton(validateEmail(text));
  }, [text]);

  const [visibleButton, onVisibleButton] = React.useState('');

  const SuccessfulSubscription = () =>
  Alert.alert('Thanks for subscribing, stay tuned!', '', [
    {text: 'OK', onPress: () => console.log('OK Pressed')},
  ]);

  return ( 
    <View style={styles.container}>
      <Image 
        style={styles.logo} 
        source={require('../assets/little-lemon-logo-grey.png')}
        accessible={true}
        accessibilityLabel={'Little Lemon Grey Version Logo'} 
      />
      <Text style={styles.text}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={Text}
        placeholder='Type your email here'
      />
      {visibleButton &&
      <Pressable style={styles.button} onPress={SuccessfulSubscription}>
        <Text style={styles.buttonText}> Subscribe </Text>
      </Pressable>}
      {!visibleButton &&
        <Pressable style={styles.disabledButton}>
        <Text style={styles.buttonText}> Subscribe </Text>
      </Pressable>}
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
     height: 90,
     width: 290,
     resizeMode: 'contain',
     marginTop: 32,
  },
  text: {
    textAlign: 'center',
    width: 280,
    marginTop: 24,
    fontSize: 16,
  },
  input: {
    height: 40,
    marginTop: 24,
    borderWidth: 1,
    padding: 4,
    width: '80%',
    borderRadius: 8,
  },
  button: {
    fontSize: 24,
    padding: 8,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#495E57',
    borderColor: '#495E57',
    borderWidth: 2,
    marginTop: 24,
    borderRadius: 8,
    width: '80%',
  },
  disabledButton: {
    fontSize: 24,
    padding: 8,
    marginVertical: 8,
    margin: 100,
    backgroundColor: '#808080',
    borderColor: '#808080',
    borderWidth: 2,
    marginTop: 24,
    borderRadius: 8,
    width: '80%',
    opacity: '80%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SubscribeScreen;
