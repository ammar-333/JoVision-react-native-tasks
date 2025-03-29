import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  TextInput,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const MyFunctionPage_Task21 = () => {
  useEffect(() => {
    console.log('myFunctionPage loaded');

    return () => {
      console.log('myFunctionPage unloaded');
    };
  }, []);

  return (
    <View>
      <Text style={styles.text}>Hello from MyFunctionComponent_21</Text>
    </View>
  );
};
export default MyFunctionPage_Task21;

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
