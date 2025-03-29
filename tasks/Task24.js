import React, {useState, useEffect, useRef} from 'react';
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
import MyFunctionPage_Task24 from '../components/MyFunctionPage_Task24';

const Task24 = () => {
  const [text, setText] = useState(' ');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="type something..."
        onChangeText={setText}
        value={text}
      />
      <MyFunctionPage_Task24 text={text} />
    </View>
  );
};
export default Task24;

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
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
