import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const MyFunctionPage = () => {
  useEffect(() => {
    console.log('myFunctionPage loaded');

    return () => {
      console.log('myFunctionPage unloaded');
    };
  }, []);

  return (
    <View>
      <Text style={styles.text}>Hello from MyFunctionPage</Text>
    </View>
  );
};
export default MyFunctionPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
