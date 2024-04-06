import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import InitialLoading from '../../componenets/InitialLoading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomeScreen from './WelcomeScreen';
import Header from '../../componenets/Header';
import ReadChapter from '../../componenets/ReadChapter';

export default function Homescreen({route}) {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Get the username asynchronously within the useEffect hook
    const getUserName = async () => {
      try {
        const uname = await AsyncStorage.getItem('username');
        setUserName(uname !== null ? uname : '');
      } catch (error) {
        console.log('Error while retrieving Username from AS');
      } finally {
        // Set loading to false even if there's an error
        setTimeout(() => {
          setLoading(false)
        }, 2000);
      }
    };

    getUserName();
  }, [route]);

  return (
    <View style={{flex: 1}}>
      {loading ? (
        <InitialLoading />
      ) : (
        <>
          {
            userName === '' ? (
              <WelcomeScreen/>
            ) : (
              <View style={{flex: 1}}>
                <Header name={userName}/>
                <Button title='Chapter 1' onPress={() => navigation.navigate('Read', {chapter: "ch1.pdf"})}/>
                <Button title='Chapter 2'/>
              </View>
            )
          }
        </>
      )}
    </View>
  );
}
