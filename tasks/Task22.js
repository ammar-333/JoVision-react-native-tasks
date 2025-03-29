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
import MyFunctionPage_Task22 from '../components/MyFunctionPage_Task22';

const Task22 = () => {
  const [text, setText] = useState(' ');

  return (
    <View style={styles.container}>
      <MyFunctionPage_Task22 updateText={setText} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
export default Task22;

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
