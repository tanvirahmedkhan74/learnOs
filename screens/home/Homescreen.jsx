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
import InitialLoading from '../../componenets/InitialLoading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomeScreen from './WelcomeScreen';
import Header from '../../componenets/Header';
import ReadChapter from '../../componenets/ReadChapter';
import FileViewer from 'react-native-file-viewer';
import Simulation from '../../componenets/Simulation';

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
          setLoading(false);
        }, 2000);
      }
    };

    getUserName();
  }, [route]);

  return (
    <View style={styles.container}>
      {loading ? (
        <InitialLoading />
      ) : (
        <>
          {userName === '' ? (
            <WelcomeScreen />
          ) : (
            <View style={styles.content}>
              <Header name={userName} />
              <View style={styles.pdfCard}>
                <Text style={styles.simulationText}>PDF Contents</Text>
              </View>
              <View style={{height: '65%'}}>
              <ScrollView contentContainerStyle={styles.scrollViewContainer}>
                <Button
                  title="Introduction"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 1});
                  }}
                  style={styles.btnStyle}
                />

                <Button
                  title="Operating System Services"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 2});
                  }}
                  style={styles.btnStyle}
                />

                <Button
                  title="Processes"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 3});
                  }}
                  style={styles.btnStyle}
                />

                <Button
                  title="Threads and Concurrency"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 4});
                  }}
                  style={styles.btnStyle}
                />

                <Button
                  title="CPU Scheduling"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 5});
                  }}
                  style={styles.btnStyle}
                />

                <Button
                  title="Synchronization Tools"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 6});
                  }}
                  style={styles.btnStyle}
                />

                <Button
                  title="Synchronization Examples"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 7});
                  }}
                  style={styles.btnStyle}
                />

                <Button
                  title="Deadlocks"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 8});
                  }}
                  style={styles.btnStyle}
                />

                <Button
                  title="Main Memory"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 9});
                  }}
                  style={styles.btnStyle}
                />

                <Button
                  title="Virtual Memory"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 10});
                  }}
                  style={styles.btnStyle}
                />

                <Button
                  title="Mass-Storage Structure"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 11});
                  }}
                  style={styles.button}
                />

                <Button
                  title="I/O System"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 12});
                  }}
                  style={styles.button}
                />

                <Button
                  title="File-System Interface"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 13});
                  }}
                  style={styles.button}
                />

                <Button
                  title="File-System Implementation"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 14});
                  }}
                  style={styles.button}
                />

                <Button
                  title="File-System Internals"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 15});
                  }}
                  style={styles.button}
                />

                <Button
                  title="Security"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 16});
                  }}
                  style={styles.button}
                />

                <Button
                  title="Protection"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 17});
                  }}
                  style={styles.button}
                />

                <Button
                  title="Virtual Machines"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 18});
                  }}
                  style={styles.button}
                />

                <Button
                  title="Network and Distributed Systems"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 19});
                  }}
                  style={styles.button}
                />

                <Button
                  title="The Linux System"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 20});
                  }}
                  style={styles.button}
                />

                <Button
                  title="Windows 10"
                  onPress={() => {
                    navigation.navigate('Read', {chapter: 21});
                  }}
                  style={styles.button}
                />
              </ScrollView>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('ReviewQuestions')}>
                <View style={styles.simulationCard}>
                  <Text style={styles.simulationText}>Review Questions</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('Simulation')}>
                <View style={styles.simulationCard}>
                  <Text style={styles.simulationText}>Simulation</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </>
      )}
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
    width: '100%',
    height: 'auto'
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
