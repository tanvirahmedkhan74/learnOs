import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import for navigation

export default function Start({ route }) {
  const {name} = route.params;
  const navigation = useNavigation(); // Get navigation reference

  const handlePress = () => {
    navigation.navigate('Home', {name}); // Navigate to 'Home' screen on button press
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        {name}, Let us start our journey!
      </Text>
      <Button title="Let's Go!" onPress={handlePress} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Make the container take up the full screen
    backgroundColor: '#135D66', // Adjust background color
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
  },
  greeting: {
    fontSize: 24, // Adjust greeting font size
    fontWeight: 'bold', // Make the greeting text bold
    color: '#BED7DC', // Set greeting text color
    marginBottom: 20, // Add some margin below the greeting
  },
  button: {
    backgroundColor: '#b58df1', // Set button background color
    borderRadius: 10, // Add some rounded corners to the button
    paddingHorizontal: 20, // Add horizontal padding for better spacing
    paddingVertical: 10, // Add vertical padding for better spacing
  },
});
