import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Simulation = ({ onPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.simulationCard} onPress={() => navigation.navigate('Deadlock')}>
        <Text style={styles.simulationText}>Deadlock</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    backgroundColor: '#f5f5f5', // Light background color
    padding: 20,
  },
  simulationCard: {
    backgroundColor: '#4A90E2', // Attractive blue color
    padding: 30, // Increased padding for a larger box
    borderRadius: 10, // Rounded corners
    elevation: 5, // More pronounced shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3, // Darker shadow for more depth
    shadowRadius: 5,
    marginBottom: 20, // Space between cards
  },
  simulationText: {
    fontSize: 24, // Larger font size
    fontWeight: 'bold',
    color: '#fff', // White text color
    textAlign: 'center',
  },
});

export default Simulation;
