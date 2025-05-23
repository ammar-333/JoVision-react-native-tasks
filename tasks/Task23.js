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
import MyClassPage_Task23 from '../components/MyClassPage_Task23';

const Task23 = () => {
  const [text, setText] = useState(' ');

  return (
    <View style={styles.container}>
      <MyClassPage_Task23 updateText={setText} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};
export default Task23;

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
