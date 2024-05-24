import React from 'react';
import {StyleSheet, Dimensions, View} from 'react-native';
import Pdf from 'react-native-pdf';
import FileViewer from 'react-native-file-viewer';

export default function ReadChapter({route}) {
  const {chapter} = route.params;
  const paths = {
    1: require('../assets/pdf/ch1.pdf'),
    2: require('../assets/pdf/ch2.pdf'),
    3: require('../assets/pdf/ch3.pdf'),
    4: require('../assets/pdf/ch4.pdf'),
    5: require('../assets/pdf/ch5.pdf'),
    6: require('../assets/pdf/ch6.pdf'),
    7: require('../assets/pdf/ch7.pdf'),
    8: require('../assets/pdf/ch8.pdf'),
    9: require('../assets/pdf/ch9.pdf'),
    10: require('../assets/pdf/ch10.pdf'),
    11: require('../assets/pdf/ch11.pdf'),
    12: require('../assets/pdf/ch12.pdf'),
    13: require('../assets/pdf/ch13.pdf'),
    14: require('../assets/pdf/ch14.pdf'),
    15: require('../assets/pdf/ch15.pdf'),
    16: require('../assets/pdf/ch16.pdf'),
    17: require('../assets/pdf/ch17.pdf'),
    18: require('../assets/pdf/ch18.pdf'),
    19: require('../assets/pdf/ch19.pdf'),
    20: require('../assets/pdf/ch20.pdf'),
    21: require('../assets/pdf/ch21.pdf'),
    31: require('../assets/pdf/re/re1.pdf'),
    32: require('../assets/pdf/re/re2.pdf'),
    33: require('../assets/pdf/re/re3.pdf'),
    34: require('../assets/pdf/re/re4.pdf'),
    35: require('../assets/pdf/re/re5.pdf'),
    36: require('../assets/pdf/re/re6.pdf'),
    37: require('../assets/pdf/re/re7.pdf'),
    38: require('../assets/pdf/re/re8.pdf'),
    39: require('../assets/pdf/re/re9.pdf'),
    40: require('../assets/pdf/re/re10.pdf'),
    41: require('../assets/pdf/re/re11.pdf'),
    42: require('../assets/pdf/re/re12.pdf'),
    43: require('../assets/pdf/re/re13.pdf'),
    44: require('../assets/pdf/re/re14.pdf'),
    45: require('../assets/pdf/re/re15.pdf'),
    46: require('../assets/pdf/re/re16.pdf'),
    47: require('../assets/pdf/re/re17.pdf'),
    48: require('../assets/pdf/re/re18.pdf'),
    49: require('../assets/pdf/re/re19.pdf'),
    50: require('../assets/pdf/re/re20.pdf'),
    51: require('../assets/pdf/re/re21.pdf'),
    // 22: require("../assets/pdf/ch22.pdf"),
    // 23: require("../assets/pdf/ch23.pdf"),
  };

  return (
    <View style={styles.container}>
      <Pdf
        trustAllCerts={false}
        source={paths[chapter]}
        onLoadComplete={(numberOfPages, filePath) => {
          console.log(`Number of pages: ${numberOfPages}`);
        }}
        onPageChanged={(page, numberOfPages) => {
          console.log(`Current page: ${page}`);
        }}
        onError={error => {
          console.log(error);
        }}
        // onPressLink={uri => {
        //   console.log(`Link pressed: ${uri}`);
        // }}
        style={styles.pdf}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
  },
  pdf: {
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});
