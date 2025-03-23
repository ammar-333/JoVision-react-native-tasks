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
import MyClassPage from '../components/MyClassPage';
import MyFunctionPage from '../components/MyFunctionPage';

const Task23 = () => {
  const [text, setText] = useState(' ');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="type something..."
        onChangeText={setText}
        value={text}
      />
      <MyFunctionPage />
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
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});
