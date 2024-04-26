import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import InitialLoading from '../../componenets/InitialLoading';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomeScreen from './WelcomeScreen';
import Header from '../../componenets/Header';
import ReadChapter from '../../componenets/ReadChapter';
import FileViewer from 'react-native-file-viewer';

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
              <View style={styles.buttonContainer}>
                <ScrollView style={styles.scrollView}>
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
    backgroundColor: '#f0f0f0', // Light background
  },
  content: {
    flex: 1, // Allow content to fill remaining space
  },
  buttonContainer: {
    flex: 1, // Allow buttons to take up remaining space after header
  },
  scrollView: {
    flex: 1, // Allow ScrollView to fill available space within buttonContainer
  },
  btnStyle: {
    // Adjust button styles here
    backgroundColor: '#007bff', // Primary blue color
    padding: 15,
    borderRadius: 5,
    color: '#fff', // White text color
    width: '100%', // Make buttons full width
    marginVertical: 10, // Add margin between buttons
  },
});
