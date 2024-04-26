import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Simulation = ({ onPress }) => {
  return (
    <View style={{flex: 1, marginTop: 30}}>
        <TouchableOpacity>
            <Text style={styles.simulationText}>DeadLock</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  simulationCard: {
    backgroundColor: '#fff', // White background
    padding: 15,
    borderRadius: 5,
    elevation: 3, // Add a slight shadow for card effect
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    marginBottom: 20, // Add space between cards
  },
  simulationText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Simulation;