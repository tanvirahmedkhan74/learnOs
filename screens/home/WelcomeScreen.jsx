import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import Animated, { useSharedValue, withSpring } from 'react-native-reanimated';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function WelcomeScreen() {
  const navigation = useNavigation();

  const width = useSharedValue(100);
  const [name, setName] = useState('');
  const [screen, setScreen] = useState(0);

  const handlePress = () => {
    if (screen === 2) {
        try{
            AsyncStorage.setItem('username', name);
        }catch(error){
            console.log('Error while setting the user name');
        }
      navigation.navigate('Start', {name});
    }
    width.value = withSpring(width.value + 50);
    setScreen(screen + 1);
  };

  const Screen_one = () => {
    return (
      <View>
        <Text style={styles.text}>Welcome To Learn OS</Text>
        <Text style={styles.text}>
          The Platform where the OS learning is made more exciting
        </Text>
      </View>
    );
  };

  const Screen_two = () => {
    return (
      <View>
        <Text style={styles.text}>Enter Your Name</Text>
        <TextInput
        editable
        numberOfLines={1}
        maxLength={10}
        onChangeText={text => setName(text)}
        value={name}
        style={{padding: 15}}
        autoFocus={true}
      />
      </View>
    );
  };

  const Screen_three = () => {
    return (
      <View>
        <Text style={styles.text}>Greetings {name}</Text>
        <Text style={styles.text}>
          Let us dive into the history of Operating System!
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ ...styles.box, width }} />
      {screen === 0 ? (
        <Screen_one />
      ) : screen === 1 ? (
        <Screen_two />
      ) : (
        <Screen_three />
      )}
      <Button onPress={handlePress} title={screen === 2 ? 'Get Started' : 'Next'} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#135D66',
  },
  box: {
    height: 100,
    backgroundColor: '#b58df1',
    borderRadius: 50,
    marginVertical: 64,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    margin: 5,
    fontWeight: '600',
    color: '#BED7DC',
    marginBottom: 20,
  },
  textInput: {
    backgroundColor: '#fff', // White background for better visibility
    padding: 10,
    borderRadius: 5, // Add border radius for a softer look
    borderWidth: 1, // Add a border for better distinction
    borderColor: '#ccc', // Light gray border color
    margin: 20
  },
});
