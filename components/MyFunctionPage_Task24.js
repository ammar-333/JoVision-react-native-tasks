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

const MyFunctionPage_Task24 = props => {
  return (
    <View>
      <Text style={styles.text}>{props.text}</Text>
    </View>
  );
};
export default MyFunctionPage_Task24;

const styles = StyleSheet.create({
  text: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
