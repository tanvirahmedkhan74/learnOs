import { View, Text, Image, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const {width, height} = Dimensions.get('screen');

export default function InitialLoading() {
    // AsyncStorage.setItem('username', '');
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/os10c-cover.jpg')} style={styles.image} resizeMode='stretch'/>
      <ActivityIndicator size={'medium'} style={{margin: 40}} color={'green'} animating={true}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: '#B3C8CF',
    },
    image: {
        width: width,
        height: height * 0.8,
        marginTop: 5
    }
})