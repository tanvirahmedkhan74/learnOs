import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Button,
  Alert,
} from 'react-native';

export default function DeadlockMatrix({route}) {
  const {row, col} = route.params;

  const [allocationMatrix, setAllocationMatrix] = useState(
    Array.from({length: row}, () => Array(col).fill('0')),
  );
  const [requestMatrix, setRequestMatrix] = useState(
    Array.from({length: row}, () => Array(col).fill('0')),
  );
  const [availableResources, setAvailableResources] = useState(
    Array(col).fill(''),
  );

  const handleInputChange = (matrix, setMatrix, rowIndex, colIndex, value) => {
    const updatedMatrix = matrix.map((r, i) =>
      i === rowIndex ? r.map((c, j) => (j === colIndex ? value : c)) : r,
    );
    setMatrix(updatedMatrix);
  };

  const handleAvailableChange = (index, value) => {
    const updatedAvailable = availableResources.map((val, i) =>
      i === index ? value : val,
    );
    setAvailableResources(updatedAvailable);
  };

  const handleNextPress = () => {
    console.log('Allocation Matrix:', allocationMatrix);
    console.log('Request Matrix:', requestMatrix);
    console.log('Available Resources:', availableResources);
    checkDeadlock();
  };

  const checkDeadlock = () => {
    const allocation = allocationMatrix.map(row =>
      row.map(cell => parseInt(cell, 10) || 0),
    );
    const request = requestMatrix.map(row =>
      row.map(cell => parseInt(cell, 10) || 0),
    );
    const available = availableResources.map(cell => parseInt(cell, 10) || 0);

    const finish = Array(row).fill(false);
    const need = request.map((row, processIndex) =>
      row.map(
        (req, resourceIndex) => req - allocation[processIndex][resourceIndex],
      ),
    );

    let work = [...available];
    const order = [];
    let found;

    do {
      found = false;
      for (let i = 0; i < row; i++) {
        if (!finish[i]) {
          const canProceed = need[i].every((req, j) => req <= work[j]);
          if (canProceed) {
            allocation[i].forEach((alloc, j) => {
              work[j] += alloc;
            });
            finish[i] = true;
            order.push(`P${i}`);
            found = true;
          }
        }
      }
    } while (found);

    const deadlockProcesses = finish
      .map((finished, index) => (!finished ? `P${index}` : null))
      .filter(Boolean);
    const deadlockExists = deadlockProcesses.length > 0;

    if (deadlockExists) {
      Alert.alert(
        'Deadlock Detected',
        `Processes in deadlock: ${deadlockProcesses.join(', ')}`,
      );
    } else {
      Alert.alert(
        'No Deadlock Detected',
        `Safe sequence: ${order.join(' -> ')}`,
      );
    }
  };

  const renderTable = (matrix, setMatrix, title) => (
    <View style={styles.tableContainer}>
      <Text style={styles.tableTitle}>{title}</Text>
      <ScrollView horizontal>
        <View>
          <View style={styles.headerRow}>
            <Text style={styles.headerCell}>Process</Text>
            <Text style={styles.headerCell}>
              {title === 'Allocation Matrix' ? 'Allocation' : 'Request'}
            </Text>
            {Array.from({length: col}, (_, index) => (
              <Text key={index} style={styles.headerCell}>
                R{index}
              </Text>
            ))}
          </View>
          {Array.from({length: row}, (_, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              <Text style={styles.cell}>P{rowIndex}</Text>
              <Text style={styles.cell}>--------------</Text>
              {Array.from({length: col}, (_, colIndex) => (
                <TextInput
                  key={colIndex}
                  style={styles.inputCell}
                  keyboardType="numeric"
                  value={matrix[rowIndex][colIndex]}
                  onChangeText={text =>
                    handleInputChange(
                      matrix,
                      setMatrix,
                      rowIndex,
                      colIndex,
                      text,
                    )
                  }
                />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderTable(allocationMatrix, setAllocationMatrix, 'Allocation Matrix')}
      {renderTable(requestMatrix, setRequestMatrix, 'Request Matrix')}
      <View style={styles.availableContainer}>
        <Text style={styles.tableTitle}>Available Resources</Text>
        <ScrollView horizontal>
          <View style={styles.row}>
            {Array.from({length: col}, (_, index) => (
              <TextInput
                key={index}
                style={styles.inputCell}
                keyboardType="numeric"
                placeholder={`R${index}`}
                value={availableResources[index]}
                onChangeText={text => handleAvailableChange(index, text)}
              />
            ))}
          </View>
        </ScrollView>
      </View>
      <Button title="Next" onPress={handleNextPress} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#0F4C75'
  },
  tableContainer: {
    marginBottom: 24,
    alignItems: 'center',
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headerRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  headerCell: {
    padding: 8,
    fontWeight: 'bold',
    borderWidth: 1,
    textAlign: 'center',
    minWidth: 50,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  cell: {
    padding: 8,
    borderWidth: 1,
    textAlign: 'center',
    minWidth: 50,
  },
  inputCell: {
    padding: 8,
    borderWidth: 1,
    textAlign: 'center',
    minWidth: 50,
    backgroundColor: '#f9f9f9',
  },
  availableContainer: {
    marginBottom: 24,
  },
});
