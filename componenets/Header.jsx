import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

export default function Header({ name }) {
  return (
    <View style={styles.container}>
      <Text style={styles.homeText}>LearnOS</Text>
      <Text style={styles.osText}>Home</Text>
      <Text style={styles.nameText}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
  },
  homeText: {
    color: '#FF9933', // Orange color for 'Home'
    fontSize: 20,
  },
  osText: {
    color: '#00BCD4', // Light blue color for 'OS'
    fontSize: 20,
  },
  nameText: {
    color: '#4CAF50', // Green color for name
    fontSize: 20,
    fontWeight: 'bold', // Make the name bold
  },
});
