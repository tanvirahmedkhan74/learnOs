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
    flex: 1, // Maintain flexibility for potential layout adjustments
    flexDirection: 'row',
    justifyContent: 'space-between', // Keep horizontal spacing even
    paddingHorizontal: 20, // Add horizontal padding for improved margin
    paddingVertical: 10, // Add vertical padding for better content spacing
    backgroundColor: '#3C5B6F', // Light background for better readability
    borderRadius: 5, // Subtle rounded corners for a touch of softness
    shadowColor: '#ccc', // Subtle shadow for depth
    shadowOffset: { width: 0, height: 2 }, // Shadow offset for a realistic feel
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 2, // Shadow blur radius
  },
  homeText: {
    fontSize: 24, // Increase font size for prominence
    fontFamily: 'Roboto-Bold', // Use a bold font family for a professional look (consider installing Roboto font)
    color: '#9DDE8B', // Deep blue for a strong brand presence
    fontWeight: '900'
  },
  osText: {
    fontSize: 20, // Slightly smaller for distinction
    fontFamily: 'Roboto-Regular', // Use a regular font family for a balanced appearance
    color: '#007BFF', // Medium blue for clarity
  },
  nameText: {
    fontSize: 22, // Maintain a larger size for emphasis
    fontWeight: 'bold', // Keep bold styling for importance
    color: '#28A745', // Green for user-friendliness
  },
});
