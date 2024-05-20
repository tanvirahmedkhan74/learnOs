import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import { useNavigation } from '@react-navigation/native';

export default function Deadlock() {
  const navigation = useNavigation();
  const [ProcessOpen, setProcessOpen] = React.useState(false);
  const [ProcessValue, setProcessValue] = React.useState(null);

  const [ResourceOpen, setResourceOpen] = React.useState(false);
  const [ResourceValue, setResourceValue] = React.useState(null);

  const [items, setItems] = React.useState([
    { label: '1', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
  ]);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.selectionContainer}>
        <Text style={styles.labelText}>Select Number of Processes</Text>
        <DropDownPicker
          open={ProcessOpen}
          value={ProcessValue}
          items={items}
          setOpen={setProcessOpen}
          setValue={setProcessValue}
          setItems={setItems}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          textStyle={styles.dropdownText}
        />
      </View>

      <View style={styles.selectionContainer}>
        <Text style={styles.labelText}>Select Number of Resources</Text>
        <DropDownPicker
          open={ResourceOpen}
          value={ResourceValue}
          items={items}
          setOpen={setResourceOpen}
          setValue={setResourceValue}
          setItems={setItems}
          style={styles.dropdown}
          dropDownContainerStyle={styles.dropdownContainer}
          textStyle={styles.dropdownText}
        />
      </View>

      {ProcessValue && ResourceValue ? (
        <Button
          title="Next"
          onPress={() =>
            navigation.navigate('DeadlockMatrix', { row: ProcessValue, col: ResourceValue })
          }
          color="#4A90E2"
        />
      ) : (
        <Text style={styles.infoText}>Insert process and resource</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#F0F4F8',
    padding: 20,
    justifyContent: 'center',
  },
  selectionContainer: {
    marginBottom: 190, // Increased marginBottom to create more space between dropdowns
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333333',
  },
  dropdown: {
    backgroundColor: '#E8E8E8',
    borderColor: '#CCCCCC',
  },
  dropdownContainer: {
    backgroundColor: '#FFFFFF',
    borderColor: '#CCCCCC',
  },
  dropdownText: {
    fontSize: 16,
    color: '#333333',
  },
  infoText: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: '#FF0000',
  },
});
