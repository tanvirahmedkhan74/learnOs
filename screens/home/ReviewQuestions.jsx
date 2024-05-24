import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

export default function ReviewQuestions() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.pdfCard}>
          <Text style={styles.simulationText}>Come and Test Yourself!</Text>
        </View>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Button
            title="Introduction"
            onPress={() => {
              navigation.navigate('Read', {chapter: 31});
            }}
            style={styles.btnStyle}
          />

          <Button
            title="Operating System Services"
            onPress={() => {
              navigation.navigate('Read', {chapter: 32});
            }}
            style={styles.btnStyle}
          />

          <Button
            title="Processes"
            onPress={() => {
              navigation.navigate('Read', {chapter: 33});
            }}
            style={styles.btnStyle}
          />

          <Button
            title="Threads and Concurrency"
            onPress={() => {
              navigation.navigate('Read', {chapter: 34});
            }}
            style={styles.btnStyle}
          />

          <Button
            title="CPU Scheduling"
            onPress={() => {
              navigation.navigate('Read', {chapter: 35});
            }}
            style={styles.btnStyle}
          />

          <Button
            title="Synchronization Tools"
            onPress={() => {
              navigation.navigate('Read', {chapter: 36});
            }}
            style={styles.btnStyle}
          />

          <Button
            title="Synchronization Examples"
            onPress={() => {
              navigation.navigate('Read', {chapter: 37});
            }}
            style={styles.btnStyle}
          />

          <Button
            title="Deadlocks"
            onPress={() => {
              navigation.navigate('Read', {chapter: 38});
            }}
            style={styles.btnStyle}
          />

          <Button
            title="Main Memory"
            onPress={() => {
              navigation.navigate('Read', {chapter: 39});
            }}
            style={styles.btnStyle}
          />

          <Button
            title="Virtual Memory"
            onPress={() => {
              navigation.navigate('Read', {chapter: 40});
            }}
            style={styles.btnStyle}
          />

          <Button
            title="Mass-Storage Structure"
            onPress={() => {
              navigation.navigate('Read', {chapter: 41});
            }}
            style={styles.button}
          />

          <Button
            title="I/O System"
            onPress={() => {
              navigation.navigate('Read', {chapter: 42});
            }}
            style={styles.button}
          />

          <Button
            title="File-System Interface"
            onPress={() => {
              navigation.navigate('Read', {chapter: 43});
            }}
            style={styles.button}
          />

          <Button
            title="File-System Implementation"
            onPress={() => {
              navigation.navigate('Read', {chapter: 44});
            }}
            style={styles.button}
          />

          <Button
            title="File-System Internals"
            onPress={() => {
              navigation.navigate('Read', {chapter: 45});
            }}
            style={styles.button}
          />

          <Button
            title="Security"
            onPress={() => {
              navigation.navigate('Read', {chapter: 46});
            }}
            style={styles.button}
          />

          <Button
            title="Protection"
            onPress={() => {
              navigation.navigate('Read', {chapter: 47});
            }}
            style={styles.button}
          />

          <Button
            title="Virtual Machines"
            onPress={() => {
              navigation.navigate('Read', {chapter: 48});
            }}
            style={styles.button}
          />

          <Button
            title="Network and Distributed Systems"
            onPress={() => {
              navigation.navigate('Read', {chapter: 49});
            }}
            style={styles.button}
          />

          <Button
            title="The Linux System"
            onPress={() => {
              navigation.navigate('Read', {chapter: 50});
            }}
            style={styles.button}
          />

          <Button
            title="Windows 10"
            onPress={() => {
              navigation.navigate('Read', {chapter: 51});
            }}
            style={styles.button}
          />
        </ScrollView>
        {/* <TouchableOpacity
                onPress={() => navigation.navigate('Simulation')}>
                <View style={styles.simulationCard}>
                  <Text style={styles.simulationText}>Simulation</Text>
                </View>
              </TouchableOpacity> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C5B6F', // Light background
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  scrollViewContainer: {
    // alignItems: 'center', // Center buttons horizontally
    // paddingBottom: 20, // Add padding to avoid buttons sticking to bottom
    // width: '100%'
  },
  buttonContainer: {
    // No styles needed here (removed for clarity)
  },
  btnStyle: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    color: '#fff',
    width: '80%', // Adjust width to 80%,
    marginBottom: 20, // Add space between buttons
  },
  simulationCard: {
    backgroundColor: '#153448', // Light gray background
    padding: 15,
    borderRadius: 5,
    marginBottom: 30, // Add space between buttons
  },
  simulationText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#A3D8FF', // Darker text color
  },
  pdfCard: {
    backgroundColor: '#4F6F52', // Light gray background
    padding: 15,
    borderRadius: 5,
    marginBottom: 30, // Add space between buttons
    marginTop: 5,
  },
});
